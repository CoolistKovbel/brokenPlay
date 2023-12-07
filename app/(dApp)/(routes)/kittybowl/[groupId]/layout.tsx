
import { ServerSidebar } from "@/components/sidebar/sidebar-server";
import { User } from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";




const ServerIdLayout = async ({children, params,}: {children: React.ReactNode; params: {groupId: string}}) => {

    console.log(params, "Ther is a sservier id here")
    const dd = await User()
    console.log(dd, "woof")

    const server = await prisma.group.findUnique({
        where: {
            id: params.groupId,
            members: {
                some: {
                    profileId: dd?.userId
                }
            }
        }
    })

    console.log(server, "Unique server goundf")

    if(!server) {
        return redirect("/")
    }

    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0"> 
                <ServerSidebar serverId={params.groupId} />
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    )
}

export default ServerIdLayout