"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ethers } from "ethers";
import { CreateMysticGroup } from "@/lib/web3";
import { FileUpload } from "../FileUpload";



const formSchema = z.object({
    name: z.string().min(1, {
      message: "group name required",
    }),
    cost: z.string().min(1, {
      message: "make sure the price is good"
    }),
    imageUrl: z.any(),
  });

export const CreateServerModal = () => {
  const { isOpen, onClose, type } = useModal();
    const router = useRouter();
    const [deFile, setFile] = useState<File | null>(null);

    const isModalOpen = isOpen && type === "createServer";

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
  
  
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        cost: "",
        imageUrl: "",
      },
    });
  
    const isLoading = form.formState.isSubmitting;
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        
        const channelName = values.name
        const channelCost = ethers.utils.parseEther(values.cost)
        const channelImage = deFile


        const cImage = await FileUpload({channelImage});
        
        console.log({
          channelCost,
          channelName,
          cImage
        })

        await CreateMysticGroup({channelImage: cImage, channelCost, channelName})

        // Handle return data or upload smart contract or ippfs

        form.reset();
        router.refresh();
        onClose();
        
      } catch (error) {
        console.log(error);
      }
    };

    const handleClose = () => {
      form.reset();
      onClose();
    }
  

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Create your group
            </DialogTitle>
            <DialogDescription className="text-center text-zine-500">
              Give your group a purpose...what is going to be de next club in town
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">
                <div className="flex items-center justify-center text-center">
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input   
                            type="file"                        
                            onChange={handleFileChange}
                            className="p-2 bg-[#222] text-white"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
  
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Server Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                          placeholder="enter server name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Cost: 
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                          placeholder="enter server amount in eth"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              
              <DialogFooter className="bg-gray-200 px-6 py-4">
                <Button disabled={isLoading} variant="secondary">
                  Create
                </Button>
              </DialogFooter>
            </form>
          </Form>

        </DialogContent>
      </Dialog>
    )
}