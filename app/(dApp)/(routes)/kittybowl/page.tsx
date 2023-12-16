import AllGroups from "@/components/kittyhome/AllGroups";
import CreateGroup from "@/components/kittyhome/CreateGroup";
import JoinVip from "@/components/kittyhome/JoinVip";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";




function KittyBowl() {




  return (
    <div className="pt-[100px] bg-black text-green-500 w-full h-full flex items-center justify-center flex-col gap-10 ">
        <div className="bg-red-500 flex-1"></div>

     
          {/* Mention the user name */}
          <div className="w-full p-4 text-center h-[800px] bg-pink-300">
            <div className="w-[1200px] h-full flex items-center justify-center flex-col m-auto gap-3">
              <div className="bg-black text-yellow-300 p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our KittyBowl</h2>
                <p className="text-1xl md:text-2xl">The place where you can communicate with other kitties</p>
              </div>

              <div className="w-[200px] h-[200px] relative">
                  <Image alt="yes" src="/rabbitM.png" fill />
              </div>
            </div>
          </div>

          {/* Launch a create group model and push to group page */}
          <Separator className="bg-orange-200 rounded-md my-2" />

          <CreateGroup />

          <Separator className="bg-orange-200 rounded-md my-2" />
          
          {/* join vip group and move onto push to group page */}
          <JoinVip />

          <Separator className="bg-orange-200 rounded-md my-2" />

          {/* list all the group availble to join - allow user to join - and push to group page */}
          <AllGroups />

    </div>
  );
}

export default KittyBowl;
