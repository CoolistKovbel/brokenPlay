"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "../ui/action-tooltip";
import Image from "next/image";

function CreateGroup() {
  const { onOpen } = useModal();

  const handleCreateGroup = async (e: any) => {
    e.preventDefault();
    console.log("kill me");

    onOpen("createServer")
  };

  return (
    <div className="w-full p-4 h-[600px]">
      <div className="flex items-start justify-between flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          If you have an nft create a group
        </h2>
        <p className="text-[18px] leading-relaxed">
          There is a small price to create a group but you will also be able to
          set a price for others to join. <strong>Be generous </strong>, most of
          the earnings will be going back to the contract for future features and
          will fuel me to produce some content
        </p>
        <ActionTooltip side="right" align="center" label="Add a server">
          <Button onClick={handleCreateGroup} className="w-[200px] border-2" variant="ghost">Create Group</Button>
        </ActionTooltip>
      </div>
      <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] float-right mr-[120px]">
        <Image src="/feature.gif" alt="mint" fill  className="rounded-full"/>
      </div>
    </div>
  );
}

export default CreateGroup;
