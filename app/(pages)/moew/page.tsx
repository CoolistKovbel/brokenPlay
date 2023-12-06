// Share an announcement
import AnnounceMessages from "@/components/AnnounceMessages";
import AnnouncementForm from "@/components/forms/AnnouncementForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

async function Meow() {

  const x = false

  const session = await getServerSession(authOptions);

  console.log(session?.user, "sessoin in the Meow page");




  return (
    <div className="flex items-center justify-between flex-col h-full">
      {/*  small title*/}
      <h2 className="text-4xl font-bold p-3">Mystic Announcments</h2>

      {/* Content */}
      <div className="flex items-center justify-between flex-col h-full w-full">

        {/* Announcements messages */}
        <AnnounceMessages />

        {x ? (
          <div className="w-full h-[20%] p-2 flex items-center justify-center">
            <h2 className="text-center text-2xl">Must connect to send message</h2>
          </div>
        ) : (
          <div className="w-full bg-[#222]">
            <AnnouncementForm />
          </div>
        )}
      </div>


    </div>
  );
}

export default Meow;
