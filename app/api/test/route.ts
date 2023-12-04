import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { ethers } from "ethers";
import { prisma } from "../../../lib/db";
import {
  signInMessageVerification,
  getEthereumAccount,
  getUserNFTProfileImage,
} from "../../../lib/web3";
import { hash } from "bcrypt";

declare global {
  interface Window {
    ethereum: any;
  }
}

export async function GET() {
  const data = {
    donate: "0x1C352E8F3e035c524F2385818b44859906d3c705",
    please: "give some eat papaplease",
  };

  try {
    const x = await signInMessageVerification();

    const account = await getEthereumAccount();

    console.log(account);

    return NextResponse.json(`Signed Transaction, ${x}`, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}

// register an account
export async function POST(req: NextRequest) {
  try {
    // const body = (await req.formData()).get("imageUrl")
    const bodyv2 = await req.formData();
    const username = bodyv2.get("username");
    const email = bodyv2.get("email");
    const password = bodyv2.get("password");
    const eddress = bodyv2.get("eddress");
    let imageUrl = bodyv2.get("imageUrl");


    const data = {
        username,
        email,
        password,
        eddress,
        imageUrl
    }

    console.log(data)

    if (!imageUrl || typeof imageUrl === "string") {
      console.log("mint a nft");
      imageUrl = null;
    } else {
      const fileBuffer = await (imageUrl as Blob).arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      console.log(buffer);

      const path = `${process.cwd()}/public/${imageUrl.name}`;
      await writeFile(path, buffer);

      imageUrl = path;

      console.log(`open ${path} to see the uploaded file`);
    }


    const existingUser = await prisma.profile.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json("be sure your not duping an account", {
        status: 500,
      });
    }

    const hashedPass = await hash(data.password, 10);

    // const daBlock = {
    //     username,
    //     email,
    //     password,
    //     eddress,
    //     image: imageUrl
    // }

    // const newUser = await prisma.profile.create({
    //     data: daBlock
    // })

    return NextResponse.json(bodyv2, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("error", { status: 500 });
  }
}
