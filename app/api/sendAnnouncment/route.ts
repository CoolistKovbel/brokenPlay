import { sendMessage } from "@/lib/web3";
import { ethers } from "ethers";
import { NextResponse } from "next/server";

import {contractAddress, contractABI, getEthereumObject} from "../../../lib/web3"


export async function POST(req: Request) {


    try {
        let x = await req.json()
 

       if(!x){
           return NextResponse.json({message: "Give me a good announcement"}, {status: 400})
       }

       let contractBB =  bd()
       let y = await sendMessage(x,contractBB)

        
        console.log(y, "Annountmnet completed")

        return NextResponse.json(x, {status: 200})
    } catch (error) {
        console.log("err")
        return NextResponse.json(error, {status: 500})
    }

} 