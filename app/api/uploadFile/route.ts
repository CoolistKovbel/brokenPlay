import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.formData();

    const channelImage: File | null = body.get("channelImage") as File;
    

    const fileBuffer = await (channelImage as File).arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    let path = `${process.cwd()}/public/${crypto.randomUUID() + channelImage.name}`;

    await writeFile(path, buffer)

    path = `${path.split(`${process.cwd()}/public/`)[1]}`;


    return NextResponse.json(path, {status: 200})


  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 });
  }
}
