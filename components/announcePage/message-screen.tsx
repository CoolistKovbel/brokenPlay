import { grabAllAnnouncements } from '@/lib/web3'
import React from 'react'

async function MessageScreen() {

    const messages = await grabAllAnnouncements("0x610aC7169092c2120f20B3b04d8452fa5a90c774") // Maybe address

    console.log(messages)



  return (
    <div>MessageScreen</div>
  )
}

export default MessageScreen