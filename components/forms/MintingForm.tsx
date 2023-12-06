import React from "react";
import { useSession } from "next-auth/react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { mintNFT } from "@/lib/web3";

export const MintAmountFormSchema = z.object({
  amount: z.number().min(0, 'Make it worth to announce').max(5, "sorry try to shortnen it.."),
});

function MintingForm() {
  const { data: session } = useSession();

  console.log(session, "This is data minting feature page");
  console.log(session?.user.eddress);

  const form = useForm<z.infer<typeof MintAmountFormSchema>>({
    resolver: zodResolver(MintAmountFormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onSubmitBro = async (e:any) => {
    e.preventDefault()
    const x = e.target[0].value
    try {
        console.log("submited", x)
        await mintNFT(x)
    } catch (error) {
        console.log(error)
    }

  };
  return (
      <form className="mt-3 flex items-center justify-between" onSubmit={onSubmitBro}>
        <input type="number" className="text-black w-[30%] p-4"/>

        <Button className="mt-3" type="submit">Mint now</Button>
      </form>
  );
}

export default MintingForm;
