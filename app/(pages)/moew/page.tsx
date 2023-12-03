// Share an announcement
import AnnouncementForm from "@/components/forms/AnnouncementForm";
import React from "react";

function Meow() {
  const x = true

  return (
    <div className="flex items-center justify-between flex-col h-full">
      {/*  small title*/}
      <h2 className="text-4xl font-bold p-3">Mystic Announcments</h2>

      {/* Content */}
      <div className="flex items-center justify-between flex-col h-full">

        {/* Announcements messages */}
        <div className="flex items-center gap-2 flex-col bg-[black] text-green-500 p-2 h-full overflow-auto">
          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>
          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>
          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>

          <div>
            <h2>0x123124124</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit impedit iure nam ipsam illum, repudiandae ut nihil
              tempora ad similique dolores qui at illo facilis eveniet maiores
              esse aliquam suscipit?
            </p>
          </div>
        </div>

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
