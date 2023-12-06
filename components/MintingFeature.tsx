"use client";

import * as z from 'zod'
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
import { zodResolver } from '@hookform/resolvers/zod';
import { mintNFT } from "../lib/web3"
import { useSession } from 'next-auth/react'

export const MintAmountFormSchema = z.object({
  amount: z.number() 
})

function MintingFeature() {

  const { data: session } = useSession()

  console.log(session, "This is data minting feature page")

  const form = useForm<z.infer<typeof MintAmountFormSchema >>({
    resolver: zodResolver(MintAmountFormSchema ),
    defaultValues: {
      amount: 0,
    },
  });


  const onSubmit =  (values: z.infer<typeof MintAmountFormSchema>) => {
    console.log("submited", values.amount)
  }


  return (
    <section id="#mint" className="bg-[#333] p-2 w-full h-full flex items-center justify-center">

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

        <div className="text-white w-[60%] p-3 border-solid">
          <h2 className="text-2xl font-bold">Mystic Murko Collection</h2>
          <p>
            Limited 222 release, with special capabilities and features that can
            be used on this site and many others soon.
          </p>

          <p>Cost: 0.042 ETH</p>

          <Form {...form}>
            <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
      
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="bg-black text-[yellow] p-1 rounded">
                      Amount:
                    </FormLabel>
                    <FormControl>
                      <Input type="number"  {...field} className='text-black'/>
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
