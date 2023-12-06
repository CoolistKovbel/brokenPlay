import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Validation schema for server request
const UserSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  eAddress: z.string().min(1, "ox address"),
  username: z.string().min(1, "username"),
  image: z.any(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, eAddress, image } =
      UserSchema.parse(body);

    console.log(image);

    // Check if there are an existing user

    const existingUserbyEmail = await prisma.profile.findUnique({
      where: { email },
    });

    const existingUserbyUsername = await prisma.profile.findUnique({
      where: { username },
    });

    if (existingUserbyEmail || existingUserbyUsername) {
      return NextResponse.json("need a better name buddy", { status: 409 });
    }

    const hashedPassword = await hash(password, 10);

    // Setup image function with server for creation

    const newUser = await prisma.profile.create({
      data: {
        userId: crypto.randomUUID(),
        username,
        email,
        password: hashedPassword,
        eddress: eAddress,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(rest, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
