// Chat with others or if youre de cat create a room for your kitties
import ChatMessageForm from "@/components/forms/ChatMessageForm";
import Image from "next/image";
import React from "react";

const Pur = ({children}: {children: React.ReactNode}) => {

  


  return (
    <div className="w-full h-full flex items-center justify-center">
      
      <div className="bg-[#222] w-full h-full flex items-center">
        
        
        {/* ÷Main chat hostiry */}
        <div className="bg-[#121] h-full flex items-center justify-between flex-col" >
          <div className="p-10 bg-[#111]">

            <div>
              <div className="relative w-[100px] h-[100px]">
                <Image src="" alt="" fill />
              </div>

              <div className="">
                <h2>0x1C352E8F3e035c524F2385818b44859906d3c705</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                  adipisci quam dolore quo repellendus delectus ullam! Provident
                  debitis, quaerat optio sed excepturi similique eius autem ea
                  culpa sint molestias et.
                </p>
              </div>
            </div>

            <div>
              <div className="relative w-[100px] h-[100px]">
                <Image src="" alt="" fill />
              </div>

              <div className="">
                <h2>0x1C352E8F3e035c524F2385818b44859906d3c705</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                  adipisci quam dolore quo repellendus delectus ullam! Provident
                  debitis, quaerat optio sed excepturi similique eius autem ea
                  culpa sint molestias et.
                </p>
              </div>
            </div>

          </div>
          {/* Submit chat */}
          <ChatMessageForm />
        </div>
      </div>

    </div>
  );
}


export default Pur

