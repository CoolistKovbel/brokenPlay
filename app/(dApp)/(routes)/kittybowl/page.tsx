import CreateGroup from "@/components/kittyhome/CreateGroup";
import { Button } from "@/components/ui/button";



function KittyBowl() {




  return (
    <div className="pt-[100px] bg-black text-green-500 w-full h-full flex flex-col gap-10">
        
        {/* Mention the user name */}
        <div className="w-full p-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our KittyBowl</h2>
            <p className="text-1xl md:text-2xl">The place where you can communicate with other kitties</p>
        </div>

        {/* Launch a create group model and push to group page */}
        <CreateGroup />

        {/* join vip group and move onto push to group page */}
        <div className="w-full text-right p-4">
            <h2 className="text-3xl font-bold mb-2">You may also join our exclusive nft group chat for those who have an nft</h2>
            <p className="text-md">
                You <strong>must</strong> own a nft to join the chat.... it will be free
            </p>
            <div className="w-[20%] p-2 flex items-center justify-between m-auto mt-4">
                <Button>Get NFT</Button>
                <Button>Join VIP</Button>
            </div>
        </div>

        {/* list all the group availble to join - allow user to join - and push to group page */}
        <div className="bg-[#222] w-full text-center p-5">
            <h2 className="text-4xl font-bold mb-5">No nft no problem</h2>
            <p className="mb-2">
                You will still be able to join any top cat group for a price. 
            </p>
            {/* Groups */}
            <div className="bg-[yellow] w-full h-[400px]">

            </div>
        </div>


    </div>
  );
}

export default KittyBowl;
