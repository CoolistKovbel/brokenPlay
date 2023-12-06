"use client";

import { prisma } from "./db";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return JSON.stringify(session);
};
