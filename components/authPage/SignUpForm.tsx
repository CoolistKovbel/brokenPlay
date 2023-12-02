"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

function SignUpForm() {
  const form = useForm();

  return (
    <div className="bg-[#111] h-full flex items-center align-center justify-center">
      <div className="p-10 h-[720px] w-full flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold">
          <Link href="/">MysticMurko</Link>
        </h2>

        <div className="flex items-center justify-between w-full">
          {/* Announce content */}
          <div className="max-w-[500px] bg-[#222] p-4 rounded-lg">
            <h3 className="text-4xl font-bold mb-4">Connect Now</h3>

            <div className="text-sm">
              <p className="mb-2">
                💎 Be able to seemsly connect to the app with your metemask
                account with a simple sign up your account will saved onto our
                database for future interoperbility
              </p>

              <p className="mb-2">
                💎 Be able to chat and play with web3 features while in a
                classic look of web2
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <Form {...form}>
            <form className="bg-[#222] p-4 w-[250px] rounded-lg">
              <div className="p-2 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username: </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="enter a username"
                          className="bg-black text-[#16a34a] text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email: </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="enter your email"
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
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
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
        </div>

        <p>
          Already have an account{" "}
          <Link href="/sign-in" className="text-[yellow] font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
