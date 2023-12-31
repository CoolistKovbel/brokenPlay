"use client";

import React, { useState, useEffect } from "react";
import * as z from "zod";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { SignInFormSchema } from "./constant";

import { useRouter } from "next/navigation";

function SignInForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      password: "",
      eddress: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    try {

      console.log(values);

      const res = await signIn("credentials", {
        eddress: values.eddress,
        password: values.password,
        redirect: false
      });
      
      if(res?.ok){
        router.push("/mint")
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="bg-[#111] h-full flex items-center align-center justify-center">

      <div className="p-10 h-full w-full flex flex-col items-center justify-between">

        <h2 className="text-4xl font-bold">
          <Link href="/">MysticMurko</Link>
        </h2>

        <div className="flex items-center justify-between w-[80%] m-auto flex-col md:flex-row">
          {/* Signup Form */}
          <Form {...form}>
            <form
              className="bg-[#222] p-4 w-[250px] rounded-lg mb-10"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="p-2 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="eddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Eddress: </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter 0xAddress"
                          className="bg-black text-[#16a34a] text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password: </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="enter your password"
                          className="bg-black text-[#16a34a] text-sm"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className="bg-black text-[#16a34a] text-1xl uppercase hover:text-[yellow] mt-5">
                  sign in
                </Button>
              </div>
            </form>
          </Form>

          {/* Banner */}
          <div className="relative w-[300px] h-[300px]">
            <Image src="/DarkHorsev12-test.png" alt="small banner" fill />
          </div>
        </div>

        <p>
          Need an account{" "}
          <Link href="/sign-up" className="text-[yellow] font-bold">
            Sign Up
          </Link>
        </p>
      </div>
      
    </div>
  );
}

export default SignInForm;
