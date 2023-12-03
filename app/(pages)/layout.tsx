import PageLayoutHeader from "@/components/PageLayoutHeader"
import Link from "next/link"



export default function Pagelayout({
    children,
  }: {
    children: React.ReactNode
  }) {



    return (
      <div className="text-white flex flex-col flex-col-reverse items-center w-full h-[100vh]">

        <div className="bg-[#111] h-[11%] w-full">
          <PageLayoutHeader />
        </div>

        <div className="bg-[#222] h-full w-full">
            {children}
        </div>


      </div>
    )
  }