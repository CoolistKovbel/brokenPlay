import { Hash } from "lucide-react"
import { MobileToggle } from "../mobile-toggle";
import { SocketIndicator } from "../socket-indicator";
import { UserAvatar } from "../user-avatar";


interface ChatHeaderProps {
    groupId: string;
    name: string;
    type: "channel" | "conversation"
    imageUrl?: string
}

export const ChatHeader = ({
    groupId,
    name,
    type,
    imageUrl
}: ChatHeaderProps) => {
    return (
        <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 border-b-2 bg-black text-yellow-500">
            <MobileToggle groupID={groupId}/>
            {type === "channel" && (
                <Hash  className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"/>
            )}
            {
                type === "conversation" && (
                    <UserAvatar src={imageUrl} className="h-8 w-8 mr-2" />
                )
            }
            <p className="font-semibold text-md text-yellow-500">
                {name}
            </p>
            <div className="ml-auto flex items-center">
                <SocketIndicator />
            </div>
        </div>
    )
}