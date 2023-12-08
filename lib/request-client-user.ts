"use client"

import { useSession } from "next-auth/react"

export const Uuser = () => {
    const {data: session} = useSession()
    return session
}