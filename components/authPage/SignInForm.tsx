"use client";

import React from "react";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";

function SignInForm() {
  const form = useForm();

  return (
    <div className="bg-[#111] h-full flex items-center align-center justify-center">
      <div className="p-10 h-[720px] w-full flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold">
          <Link href="/">MysticMurko</Link>
        </h2>

        <div className="flex items-center justify-between w-[80%] m-auto">
          {/* Signup Form */}
          <Form {...form}>
            <form className="bg-[#222] p-4 w-[250px] rounded-lg">
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
                        />
                      </FormControl>
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
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className="bg-black text-[#16a34a] text-1xl uppercase hover:text-[yellow] mt-5">
                  sign up
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
          <Link href="/sign-in" className="text-[yellow] font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
