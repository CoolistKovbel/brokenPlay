import AllGroups from "@/components/kittyhome/AllGroups";
import CreateGroup from "@/components/kittyhome/CreateGroup";
import JoinVip from "@/components/kittyhome/JoinVip";




function KittyBowl() {




  return (
    <div className="pt-[100px] bg-black text-green-500 w-full h-full flex flex-col gap-10 ">
        
        {/* Mention the user name */}
        <div className="w-full p-4 text-center h-[220px]">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our KittyBowl</h2>
            <p className="text-1xl md:text-2xl">The place where you can communicate with other kitties</p>
        </div>

        {/* Launch a create group model and push to group page */}
        <CreateGroup />

        {/* join vip group and move onto push to group page */}
        <JoinVip />

        {/* list all the group availble to join - allow user to join - and push to group page */}
        <AllGroups />


    </div>
  );
}

export default KittyBowl;
