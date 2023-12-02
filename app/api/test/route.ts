import { NextResponse } from "next/server";



export async function GET() {

    const data = {
        donate: "0x1C352E8F3e035c524F2385818b44859906d3c705",
        please: "give some eat papaplease"
    }


    return NextResponse.json(data, {status: 200})
}


export async function POST(req){

    const body = await req.json()


    return NextResponse.json("Posting", {status: 200})
}