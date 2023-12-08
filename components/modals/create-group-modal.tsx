"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import * as z from "zod";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ChannelType } from "@prisma/client";
import queryString from "query-string";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


const formSchema = z.object({
    name: z.string().min(1, {
      message: "channel name required",
    }).refine(
      name => name !== "general",{
        message: "Channel name connot be 'general' "
      }
    ),
    type: z.nativeEnum(ChannelType)
  });

export const CreateGroupModal = () => {
  const { isOpen, onClose, type } = useModal();
    const router = useRouter();
    const params = useParams()
    const isModalOpen = isOpen && type === "createChannel";
  
  
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        type: ChannelType.TEXT
      },
    });
  
    const isLoading = form.formState.isSubmitting;

    console.log(params)
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {

        const url = queryString.stringifyUrl({
          url: "/api/channels",
          query: {
            serverId: params?.groupId
          }
        })
  
        await axios.post(url, values);
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
              Create channel
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8 px-6">

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Channel Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visable:ring-0 text-black focus-visable:rin-offset-0"
                          placeholder="enter channel name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField 
                  control={form.control}
                  name="type"
                  render={({field}) => (
                    <FormItem>
                        <FormLabel>Channel Type</FormLabel>
                        <Select disabled={isLoading} onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>

                            <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                              <SelectValue placeholder="select channel type" />
                            </SelectTrigger>

                          </FormControl>
                          <SelectContent>
                        {Object.values(ChannelType).map((type) => (
                          <SelectItem key={type} value={type} className="capitalize">
                              {type.toLocaleLowerCase()}
                          </SelectItem>
                        ))}
                          </SelectContent>

                        </Select>
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