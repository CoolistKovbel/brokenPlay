import Link from "next/link"



export default function Pagelayout({
    children,
  }: {
    children: React.ReactNode
  }) {



    return (
      <div className="text-white flex flex-col flex-col-reverse items-center w-full h-[100vh]">

        <div className="bg-[#111] h-[11%] w-full">

            

            <header className="flex items-center justify-between p-4 w-full h-full">
                <h2 className="text-3xl font-bold"><Link href="/">MyticMurko</Link></h2>

                <nav className="w-[200px] flex items-center justify-between ">
                    <a href="#" className="bg-[pink] p-2 text-black rounded-lg font-bold text-sm">Mint</a>
                    <a href="#" className="bg-[pink] p-2 text-black rounded-lg font-bold text-sm">Message</a>
                    <a href="#" className="bg-[pink] p-2 text-black rounded-lg font-bold text-sm">group</a>
                </nav>
            </header>



        </div>

        <div className="bg-[#222] h-full w-full">
            
            {children}
        </div>


      </div>
    )
  }