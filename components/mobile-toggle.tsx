import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { ServerSidebar } from "./sidebar/sidebar-server"
import SidebarTool from "./sidebar/sidebar-tool"


export const MobileToggle = ({groupID}: {groupID: string}) => {
    return (
        <Sheet>

            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-0 flex gap-0">

                <div className="w-[79px]">
                    <SidebarTool />
                </div>  

                <ServerSidebar groupId={groupID}/>

            </SheetContent>
        </Sheet>
    )
}