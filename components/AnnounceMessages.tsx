"use client";

import React, { useEffect, useState } from "react";
import { grabAllAnnouncements } from "../lib/web3";
import Image from "next/image";

function AnnounceMessages() {
  const [messageXD, setMessagesXD] = useState([]);

  useEffect(() => {
    const y = async () => {
      const d = await grabAllAnnouncements();
      console.log(d);
      setMessagesXD(d);
      return d;
    };
    y();
  }, []);

  return (
    <div className="flex items-center gap-2 flex-col bg-[black] text-green-500 p-2 h-full overflow-auto w-full">
      {messageXD ? (
        <div className="w-full h-full flex flex-col items-center gap-4 p-2">
          {messageXD.map((msg) => (
            <div key={crypto.randomUUID()} className="w-[80%] bg-[#d1dec6] p-2 rounded-lg border-solid">


            <div className="flex items-center justify-between mb-2">

              <div className="relative w-[100px] h-[100px] p-2">
                <Image src="/murko-mystic.png" fill alt="" className="rounded" />
              </div>

              <h2 className="font-bold">{msg.author}</h2>
            </div>

              <p className="text-sm">{msg.message}</p>

            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>There is no message</h2>
        </div>
      )}
    </div>
  );
}

export default AnnounceMessages;
