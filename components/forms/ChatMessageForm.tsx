"use client"
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

function ChatMessageForm() {
  const form = useForm();

  const handleSubmit = async () => {
    console.log("smile");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="p-2 w-full flex items-center justify-between flex-col">
              <FormLabel className="text-1xl font-bold">Message: </FormLabel>
              <FormControl>
                {/* TextArea */}
                <Textarea
                  className="bg-slate-500 text-[#16a34a] text-sm resize-none "
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button>Enter</Button>
      </form>
    </Form>
  );
}

export default ChatMessageForm;
