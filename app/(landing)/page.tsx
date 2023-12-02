"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signInMessageVerification } from "../../lib/web3"

export default function Home() {


  const handleMessageSig = async () => {
    await signInMessageVerification()
  }

  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      <h1>0x6f6C58Ba47892EF76fF9678895166E9E073917e8</h1>



      <Button onClick={handleMessageSig}>
        Sign Message
      </Button>


    </main>
  )
}
