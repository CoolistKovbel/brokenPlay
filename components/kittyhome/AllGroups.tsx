"use client";
import { getAllChannels, joinGroup } from "@/lib/web3";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function AllGroups() {
  const [groups, setGroups] = useState([]);

  const handleGroupJoin = async (e:any, id:any, cost:any) => {
    e.preventDefault();    
    id = Number(id)
    cost = Number(cost)
    const groupy = await joinGroup(id, cost)
    console.log(groupy, "handled");
  };

  console.log(
    groups.map(
      (group: any) => `there is ${group.name} and theyre id ${group.id}`
    )
  );

  useEffect(() => {
    const xx = async () => {
      const aa = await getAllChannels();
      console.log(aa);
      setGroups(aa);
    };
    xx();
  }, []);

  return (
    <div className="bg-[#222] w-full text-center p-5">
      <h2 className="text-4xl font-bold mb-5">No nft no problem</h2>
      <p className="mb-2">
        You will still be able to join any of the top {groups.length} cat group
        for a price.
      </p>
      {/* Groups */}
      <div className="bg-[yellow] w-full h-[400px]">
        {/* Loads array of NFTS */}

        {groups ? (
          <div className="bg-black p-4 w-full h-full flex flex-row gap-3">
            {groups.map((group: any) => (
              <div
                key={group.id.toString()}
                className="w-[150px] h-[150px] bg-white flex items-center justify-center flex-col gap-2"
              >
                <header className="flex items-center justify-center gap-1">
                  <h2 className="text-2xl font-bold">{group.name}</h2>
                  <p>Price: {group.cost.toString()}</p>
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
