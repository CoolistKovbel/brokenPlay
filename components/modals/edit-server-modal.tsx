"use client"

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import * as z from "zod";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";


const formSchema = z.object({
    name: z.string().min(1, {
      message: "group name required",
    }),
    imageUrl: z.any(),
  });

export const EditServerModal = () => {
  const { isOpen, onClose, type, data } = useModal();
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);

    const isModalOpen = isOpen && type === "editServer";
    const { server } = data

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        console.log(file)
        setFile(e.target.files[0]);
      }
    };
  
  
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        imageUrl: "",
      },
    });
  
    const isLoading = form.formState.isSubmitting;

    useEffect(() => {
      if(server) {
          form.setValue("name", server.name) 
          form.setValue("imageUrl", server.imageUrl || "") 
      }
    },[server, form])
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        values.imageUrl = file
        console.log(values.imageUrl)
        const formInt = new FormData()
        formInt.append("name", values.name)
        formInt.append("imageUrl", values.imageUrl || "")

        await axios.patch(`/api/groups/${server?.id}`, formInt);
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
              Update your group info
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
                          {/* file Upload component */}
                          <Input   
                            type="file"                        
                            // value={field.value}
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
              </div>
              <DialogFooter className="bg-gray-200 px-6 py-4">
                <Button disabled={isLoading} variant="secondary">
                  save
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    )
}