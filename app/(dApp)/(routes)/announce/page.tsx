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
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import * as z from "zod";
import { getAllChannels, getEthereumAccount, grabAllAnnouncements, sendMessage } from "@/lib/web3";


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

  const zD = [
    {
      profileImage: "/rabbitM2.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM3.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM2.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM3.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM2.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM3.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM2.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    },
    {
      profileImage: "/rabbitM3.png",
      address: "0x610aC7169092c2120f20B3b04d8452fa5a90c774",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      iure dolorum, voluptates quas natus vel suscipit odio excepturi
      necessitatibus est magnam praesentium illum dolorem, ad
      aspernatur. Nihil quae tempore quis!`
    }
  ]

  const onMessage = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);

    try {


     await sendMessage(values.message)

    let x = await getAllChannels()
    console.log(x)

      
    } catch (error) {
      console.log(error, "message sumbit failed")
    }


  };

  useEffect(() => {
    const Quill = require("quill");
    
  }, []);

  useEffect(() => {
    const x = async () => {
      
     const yy = await grabAllAnnouncements("0x610aC7169092c2120f20B3b04d8452fa5a90c774")
      console.log(yy)
      return yy
    }

    x()
  },[])

  return (
    <div className="pt-[100px] bg-[#222] w-full h-[100%] text-emerald-500 flex items-center justify-center flex-col gap-4">
      {/* Intro */}
      {/* ====================================================== */}
      <div className="w-full text-left p-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">
          Announcements 🌠
        </h2>
        <p className="text-md">
          You have something you want to announce? share it for a chance to win
          some eth back as a reward.
        </p>
      </div>

      {/* ====================================================== */}

      {/* Message Screen */}
 
      <div className="border-4 p-10 w-[100%] h-[720px] overflow-auto flex item-center justify-center flex-col gap-8 relative bg-[#888]" > 
        
        {/* <Image id={styles.scan} src="/scanlines.png" fill />
        <Image id={styles.bezel} src="/bezel.png" fill /> */}
        <div className="flex-1 mb-10" />
        {
          zD.map((item:any) => (  
            <div key={crypto.randomUUID()} className="p-2 w-full h-[100px]  flex items-center justify-center gap-2 bg-[#222]">
              <div className="w-[100px] h-[100px] relative">
                <Image src={item.profileImage} alt="profile" fill />
              </div>
              <div>
                <h2>{item.address.substring(0, 12)}</h2>
                <p>
                  {item.message}
                </p>
              </div>
            </div>
          ))
        }

        </div>

      {/* ====================================================== */}
      <div className="w-full h-[450px] p-10 overflow-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onMessage)}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl font-bold">Message: </FormLabel>
                  <FormControl>
                    <ReactQuill {...field}  className="h-[220px]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-12 w-[100px] h-[50px] bg-black text-yellow-500 font-bold">submit</Button>
          </form>
        </Form>
      </div>
      {/* ====================================================== */}
    </div>
  );
}

export default Announce;
