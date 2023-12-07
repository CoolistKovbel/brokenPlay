
import { ServerSidebar } from "@/components/sidebar/sidebar-server";




const ServerIdLayout = async ({children, params,}: {children: React.ReactNode; params: {groupId: string}}) => {

    console.log(params, "Ther is a sservier id here")

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