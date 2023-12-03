import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import { ethers } from "ethers";
import {prisma} from "../../../lib/db"
import { signInMessageVerification, getEthereumAccount, getUserNFTProfileImage } from "../../../lib/web3"
import {hash} from 'bcrypt'

declare global {
    interface Window {
      ethereum: any
    }
  }


export async function GET() {

    const data = {
        donate: "0x1C352E8F3e035c524F2385818b44859906d3c705",
        please: "give some eat papaplease"
    }


    try {

        const x = await signInMessageVerification()

        const account = await getEthereumAccount()


        console.log(account)

        return NextResponse.json(`Signed Transaction, ${x}`,{ status: 200})        
    } catch (error) {
        console.log(error)
        return NextResponse.json("Something went wrong", {status: 500})
    }


}


// register an account
export async function POST(req: NextRequest){

    const body = await req.formData()

    const username = body.get("username")?.toString()
    const email = body.get("email")?.toString()
    const password = body.get("password")?.toString()
    const eddress = body.get('eddress')?.toString()
    let imageUrl: File | null = body.get('imageUrl') as unknown as File

    if (!imageUrl) {
        const x = await getUserNFTProfileImage();
        imageUrl = x ? x : null;
      } else {
        if (imageUrl instanceof Blob || imageUrl instanceof File) {
          const bytes = await imageUrl.arrayBuffer();
          const buffer = Buffer.from(bytes);
      
          const path = `${process.cwd()}/public/${imageUrl.name}`;
          await writeFile(path, buffer);
      
          imageUrl = path;
      
          console.log(`open ${path} to see the uploaded file`);
        } else {
          // Handle the case where imageUrl is not a Blob or File
          console.error('imageUrl is not a Blob or File');
        }
      }
      

    try {
        const existingUser = await prisma.profile.findUnique({
            where: {email: email}
        })
    
        if(existingUser) {
            return NextResponse.json("be sure your not duping an account",{status: 500})
        }

        const hashedPass = await hash(password , 10);

        const daBlock = {
            username,
            email,
            password: hashedPass,
            eddress,
            imageUrl
        }
    
  
        const newUser = await prisma.profile.create({
            data: daBlock
        })
    
        console.log(daBlock)

        return NextResponse.json(newUser, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json("error", {status: 500})
    }




}