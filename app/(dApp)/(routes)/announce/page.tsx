"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import * as z from "zod";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const FormSchema = z.object({
  message: z.string().min(1, "edd required"),
});

function Announce() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: "",
    },
  });

  const onMessage = async (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }

  useEffect(() => {
    const Quill = require("quill");
  }, []);

  return (
    <div className="pt-[100px] bg-[#222] w-full h-[100vh] text-emerald-500">
      {/* Intro */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Announcements 🌠</h2>
        <p className="text-md">
          You have something you want to announce? share it for a chance to win
          some eth back as a reward.
        </p>
      </div>

      <div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onMessage)}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>message: </FormLabel>
                  <FormControl>
                    <ReactQuill {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Announce;
