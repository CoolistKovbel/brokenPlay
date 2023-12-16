"use client";
import { getAllChannels, joinGroup, withdrawl } from "@/lib/web3";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ethers } from "ethers";

function AllGroups() {
  const [groups, setGroups] = useState([]);

  const handleGroupJoin = async (e:any, id:any, cost:any) => {
    e.preventDefault();    
    id = Number(id)
    cost = Number(cost)
    const groupy = await joinGroup(id, cost)
    console.log(groupy, "handled");
  };


  useEffect(() => {
    const xx = async () => {
      const aa = await getAllChannels();
      console.log(aa);
      setGroups(aa);
    };
    xx();
  }, []);

  return (
    <div className="bg-[#222] border-2 w-[90%] m-auto text-center p-5 h-[500]">
      <h2 className="text-4xl md:text-8xl font-bold mb-5 uppercase mt-5">No nft no problem</h2>
      <p className="mb-2 font-bold text-[20px]">
        You will still be able to join any of the top {groups.length} cat group
        for a price.
      </p>
      {/* Groups */}
      <div className="bg-[yellow] w-full h-[400px] mt-20">
        {/* Loads array of NFTS */}

        {groups ? (
          <div className="bg-black p-4 w-full h-full flex flex-row gap-3">
            {groups.map((group: any) => (
              <div
                key={group.id.toString()}
                className="w-[150px] h-[150px] bg-yellow-300 flex items-center justify-center flex-col gap-2 rounded-lg p-2 text-black capitalize"
              >
                <header className="flex items-center justify-center flex-col gap-1">
                  <h2 className="text-[18px] font-bold">{group.name}</h2>
                  <p className="text-[10px] font-bold">Price: {ethers.utils.formatEther(group.cost.toString())}</p>
                </header>
                <Button onClick={(e) => handleGroupJoin(e, group.id.toString(), group.cost.toString())}>Join</Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="black">
            <h2>none</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllGroups;
