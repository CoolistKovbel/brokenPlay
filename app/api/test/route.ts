import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'


export async function GET() {

    const data = {
        donate: "0x1C352E8F3e035c524F2385818b44859906d3c705",
        please: "give some eat papaplease"
    }


    return NextResponse.json(data, {status: 200})
}


export async function POST(req: NextRequest){

    const body = await req.formData()

    const username = body.get("username")
    const email = body.get("email")
    const password = body.get("password")
    const eddress = body.get('eddress')
    const imageUrl: File | null = body.get('imageUrl') as unknown as File


    const bytes = await imageUrl.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = `${process.cwd()}/public/${imageUrl.name}`
    await writeFile(path, buffer)

    console.log(`open ${path} to see the uploaded file`)


    const daBlock = {
        username,
        email,
        password,
        eddress,
        imageUrl: path
    }

    console.log(daBlock)


    return NextResponse.json("Posting", {status: 200})
}