"use client"

import React, { useEffect, useState } from 'react'
import { ChatHeader } from './chat-header';
import { getAllChannels } from '@/lib/web3';

interface ChatWrapperComponentProps {
    groupID: string;
    channelID: string;
}


function ChatWrapperComponent({groupID, channelID}:ChatWrapperComponentProps ) {

    const [singleChannel, setSigalChanel] = useState([]) 

    useEffect(() => {

        const xxyz = async() =>{
          const x =  await getAllChannels()
          setSigalChanel(x[Number(groupID) - 1])
          console.log(x[groupID])
        }
        xxyz()
    
      },[groupID])


  return (
    <div className='bg-[#222] text-white w-full h-full'>
        <ChatHeader
            name={singleChannel?.name.toString()}
            groupId={Number(singleChannel?.id?.toString())}
            type="channel"
        />
        <div className="flex-1">
          Messages
        </div>
    </div>
  )
}

export default ChatWrapperComponent