"use client"

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

function AnnouncementForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="w-full">

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="p-2 w-full flex items-center justify-between flex-col">
              <FormLabel className="text-1xl font-bold">Message: </FormLabel>
              <FormControl>

                {/* TextArea */}
                <Input
                  className="bg-slate-500 text-[#16a34a] text-sm "
                  {...field}
                />


              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full">Submit</Button>

      </form>
    </Form>
  );
}

export default AnnouncementForm;
