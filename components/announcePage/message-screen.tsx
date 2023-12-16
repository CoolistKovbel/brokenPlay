import { grabAllAnnouncements } from '@/lib/web3'
import React from 'react'

async function MessageScreen() {

    const messages = await grabAllAnnouncements() // Maybe address

    console.log(messages)



  return (
    <div>MessageScreen</div>
  )
}

export default MessageScreen