import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { writeFile } from "fs/promises";



export async function POST(req: Request) {
  try {
    const bodyV = await req.formData();

    const username = bodyV.get("username")?.toString() as string
    let password: string = bodyV.get("password")?.toString() as string
    const email = bodyV.get("email")?.toString() as string
    const eAddress = bodyV.get("eAddress") as string
    const image: File | null = bodyV.get("image") as File

    console.log(bodyV)
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(eAddress)
    console.log(image)
    console.log(image.name)
    

    const fileBuffer = await (image as File).arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    console.log(buffer, "this is a buffer");

    const path = `${process.cwd()}/public/${crypto.randomUUID() + image.name}`;

    await writeFile(path, buffer)

    console.log(path.split(`${process.cwd()}/public/`)[1])

    // // Check if there are an existing user

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
        userId: crypto.randomUUID().split("-").join("").substring(0, 12),
        username,
        email,
        password: hashedPassword,
        eddress: eAddress,
        image: path.split(`${process.cwd()}/public/`)[1]
      },
    });

    console.log(newUser)

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
