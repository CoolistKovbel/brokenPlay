"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "../ui/action-tooltip";

function CreateGroup() {
  const { onOpen } = useModal();

  const handleCreateGroup = async (e: any) => {
    e.preventDefault();
    console.log("kill me");

    onOpen("createServer")
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-4xl font-bold mb-2">
        If you have an nft create a group
      </h2>
      <p className="text-[18px] leading-relaxed mb-2">
        There is a small price to create a group but you will also be able to
        set a price for others to join. <strong>Be generous </strong>, most of
        the earnings will be going back to the contract for future features and
        will fuel me to produce some content
      </p>
      <ActionTooltip side="right" align="center" label="Add a server">
        <Button onClick={handleCreateGroup}>Create Group</Button>
      </ActionTooltip>
    </div>
  );
}

export default CreateGroup;
