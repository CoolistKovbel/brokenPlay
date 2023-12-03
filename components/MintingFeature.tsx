"use client";
import React from "react";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

function MintingFeature() {
  const form = useForm();
  return (
    <section id="#mint" className=" bg-[#333] p-2">

      <div className="max-w-7xl m-auto flex items-center justify-between flex-col md:flex-row gap-5 ">
        {/* NFT image */}
        <div className="relative w-[300px] h-[300px] ">
          <Image
            src="/murko-mystic.png"
            alt="slow"
            fill
            className="rounded-xl"
          />
        </div>

        <div className="text-white w-[60%] p-3 border-solid   ">
          <h2 className="text-2xl font-bold">Mystic Murko Collection</h2>
          <p>
            Limited 222 release, with special capabilities and features that can
            be used on this site and many others soon.
          </p>

          <p>Cost: 0.042 ETH</p>

          <Form {...form}>
            <form className="mt-3">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="bg-black text-[yellow] p-1 rounded">
                      Amount:
                    </FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0-5" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="mt-3">Mint now</Button>
            </form>
          </Form>
        </div>
      </div>

    </section>
  );
}

export default MintingFeature;
