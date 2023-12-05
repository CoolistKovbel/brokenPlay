// import { ServerSidebar } from "@/components/server/server-sidebar";
// import { currentProfile } from "@/lib/current-profile"
import { ServerSidebar } from "@/components/sidebar/sidebar-server";
import { prisma } from "@/lib/db"



const ServerIdLayout = async ({children, params,}: {children: React.ReactNode; params: {serverId: string}}) => {




    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
                
                <ServerSidebar serverId={params.serverId}/>


            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    )
}

export default ServerIdLayout