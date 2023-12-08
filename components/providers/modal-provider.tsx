"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../modals/create-server-modal"
import { InviteModal } from "../modals/invite-modal"
import { EditServerModal } from "../modals/edit-server-modal"
import { MembersModal } from "../modals/members-modal"
import { CreateGroupModal } from "../modals/create-group-modal"
import { EditGroupModal } from "../modals/edit-group-model"

export const ModalProvider = () => {

    const [ isMounted, setIsmounted] = useState(false)


    useEffect(() => {
        setIsmounted(true)
    },[])


    if(!isMounted){
        return null
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
            <MembersModal />
            <CreateGroupModal />
            <EditGroupModal />
        </>
    )
}