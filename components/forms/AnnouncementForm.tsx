"use client"

import React,{useEffect} from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { AnnouncmentFormSchema } from "./constant"

import {sendMessage} from "../../lib/web3"

function AnnouncementForm() {

  const  sendingProgress = false
  
  const form = useForm<z.infer<typeof AnnouncmentFormSchema>>({
    resolver: zodResolver(AnnouncmentFormSchema),
    defaultValues: {
      message: "",
    },
  });


  const onSubmit = async (values: z.infer<typeof AnnouncmentFormSchema>) => {
    console.log(values)
    try {

    const x = await sendMessage(JSON.stringify(values.message))

    console.log(x)


    } catch (error) {
      console.log(error)
    }

  }




  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>

        {
          !sendingProgress ? (
            <div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="p-2 w-full flex items-center justify-between flex-col">
                    <FormLabel className="text-1xl font-bold">Message: </FormLabel>
                    <FormControl>

                      {/* TextArea */}
                      <Textarea
                        className="bg-slate-500 text-[#16a34a] text-sm resize-none"
                        {...field}
                      />


                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="w-full">Submit</Button>
            </div>
          ) : (
            <div>
              <h2>Message beeing mined</h2>
            </div>
          )
        }



      </form>
    </Form>
  );
}

export default AnnouncementForm;
