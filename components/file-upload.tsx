// "use client";

// import Image from "next/image";


// import "@uploadthing/react/styles.css";
// import { X } from "lucide-react";

// interface FileUploadProps {
//   onChange: (url?: string) => void;
//   value: string;
//   endpoint: "messageFile" | "serverImage";
// }

// export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {

//     const fileType = value?.split(".").pop()

//     if(value && fileType !== "pdf") {
//         return (
//             <div className="relative h-20 w-20">
//                 <Image fill src={value} alt="upload" className="rounded-full" />
//                 <button onClick={() => onChange("")} className="bg-black text-white p-1 rounded-full absolute top-0 right-0 shadow-sm" type="button">
//                     <X className="h-4 w-4" />
//                 </button>
//             </div> 
//         )
//     }

//   return (
//     <UploadDropzone
//       endpoint="messageFile"
//       onClientUploadComplete={(res) => {
//         onChange(res?.[0].url);
//       }}
//       onUploadError={(error: Error) => {
//         console.log(error);
//       }}
//     />
//   );
// };
