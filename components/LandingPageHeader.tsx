"use client"

import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

function LandingPageHeader() {

  const {data} = useSession()

  let account = false

  if(data?.user) {
    account = true
  } else {
    account = false
  }


  useEffect(() => {

    console.log(data)

  },[data])

  return (
    <header className='flex items-center justify-between bg-[#122] p-2'>
        
    {/* Left */}
    <div className='flex items-center justify-between w-[260px]'>
      <h2 className='text-3xl font-bold'><Link href="/">MysticMurko</Link></h2>
      <div className='w-20 h-20 relative'>
        <Image src="/MystixKat-v.png" alt='Mysic kitty' fill />
      </div>
    </div>


    {/* Right */}
    <div className='w-[300px]'>


      {
        account ? (
        <div className='w-full flex items-center justify-between flex-col'>
          <h3 className='mb-2 font-bold'>hello, {data?.user?.eddress.substring(0,5)}</h3>
          <nav className='w-[250px] flex items-center justify-between'>
            <Link href="/pur" className='text-[12px] bg-black text-green-500 p-1 rounded-md'>✉️ Messages</Link>
            <Link href="/moew" className='text-[12px] bg-black text-green-500 p-1 rounded-md'>💫 Announce</Link>
            <Link href="/profile" className='text-[12px] bg-black text-green-500 p-1 rounded-md'>⚙️ Profile</Link>
          </nav>
        </div>
        ) : (
          <div className='w-full flex items-center justify-between'>
            <nav className='flex items-center justify-between w-full mr-2'>
              <Link href="/#mint" className='bg-slate-500 text-white p-1 font-bold rounded-md'>Mint</Link>
              <Link href="/about" className='bg-slate-500 text-white p-1 font-bold rounded-md'>About</Link>
              <Link href="/moew" className='bg-slate-500 text-white p-1 font-bold rounded-md'>Announce</Link>
            </nav>

            <Button onClick={() => window.location.href = "/sign-in"}>Connect</Button>
          </div>
        )
      }




    </div>

  </header>
  )
}

export default LandingPageHeader