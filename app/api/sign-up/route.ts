// import { prisma } from "@/lib/db";
// import { hash } from "bcrypt";
// import { writeFile } from "fs/promises";
import { NextRequest} from "next/server";

export async function POST(req: NextRequest) {
//     try {

//       const body = await req.formData();
//       const username = body.get("username")?.toString();
//       const email = body.get("email")?.toString();
//       const password = body.get("password")?.toString();
//       const eddress = body.get("eddress")?.toString();
//       let imageUrl = body.get("imageUrl");
  
//       if (!imageUrl || typeof imageUrl === "string") {
//         console.log("mint a nft");
//         imageUrl = null;
//       } else {
//         const fileBuffer = await (imageUrl as Blob).arrayBuffer();
//         const buffer = Buffer.from(fileBuffer);
//         console.log(buffer);
  
//         let path = `${process.cwd()}/public/${imageUrl.name}`;
//         let p = `${path.split("/Users/shpintz/Desktop/hml")[1]}`;
//         await writeFile(p, buffer);
  
//         imageUrl = p;
  
//         console.log(`open ${p} to see the uploaded file`);
//       }
  
//       const existingUser = await prisma.profile.findUnique({
//         where: { email: email },
//       });
  
//       if (existingUser) {
//         return NextResponse.json("be sure your not duping an account", {
//           status: 500,
//         });
//       }
  
//       let hashedPass;

//       if (typeof password === "string") {
//         const passwordString = password.toString();
//         hashedPass = await hash(passwordString, 10);
//       }
  
//       const newUser = await prisma.profile.create({
//         data: {        
//           username: username,
//           email: email || "",
//           password: hashedPass || "",
//           eddress,
//           image: imageUrl,
//         },
//       });
  
//       console.log(newUser);
  
//       return NextResponse.json(newUser, { status: 200 });
//     } catch (error) {
//       console.log(error);
    //   return NextResponse.json("error", { status: 500 });
//     }
  }