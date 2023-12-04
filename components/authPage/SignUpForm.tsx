"use client";

import * as z from "zod";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignUpFormSchema } from "./constant";

import { getEthereumAccount } from "../../lib/web3";
import { useRouter } from "next/navigation";

function SignUpForm() {
  const router = useRouter()
  const [eImage, setImage] = useState<File>();
  const [eAdress, setEaddres] = useState("");

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      eddress: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {
    try {
      console.log(values.imageUrl)
      
      const of = {
        imageUrl: values.imageUrl,
        email: values.email,
        username: values.username,
        password: values.password,
        eAdress: values.eddress,
        
      }

      console.log(of, "Where is the data");

      const res = await fetch("/api/test", {
        method: "POST",
        body: JSON.stringify(of),
      });

      
      if(res) {
        console.log(res)
        router.push("/sign-in") 
      }


    } catch (error) {
      console.log(error);
    }
  };

  console.log(eAdress);

  useEffect(() => {
    const x = async () => {
      const y = await getEthereumAccount();
      setEaddres(y);
    };

    x();
  }, [eAdress]);

  return (
    <div className="bg-[#111] h-full flex items-center align-center justify-center">

      <div className="p-10 h-full w-full flex flex-col items-center justify-between">

        <h2 className="text-5xl font-bold ">
          <Link href="/">MysticMurko</Link>
        </h2>

        <div className="flex items-center justify-between w-full flex-col md:flex-row max-w-5xl">
          {/* Announce content */}
          <div className="max-w-[500px] bg-[#222] p-4 rounded-lg mb-10">
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
            <form
              className="bg-[#222] p-4 w-[250px] rounded-lg"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Form Content */}
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
                          {...field}
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
                          {...field}
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
                          {...field}
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
                          {...field}
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
                          {...field}
                          // onChange={(e) => setImage(e.target.files?.[0])}
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
