import { Channel, Group, Member, Profile } from "@prisma/client";
import { Server as NetServer, Socket } from "net";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type ServerWithMembersWithProfiles = Group & {
  members: (Member & { profile: Profile })[];
  channels: (Channel & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
