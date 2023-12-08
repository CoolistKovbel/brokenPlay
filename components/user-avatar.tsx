
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";

interface UserAvatarProps {
    src?: string;
    className?: string;
}

export const UserAvatar = ({
    src, className
}: UserAvatarProps) => {
    return (
        <div className={cn("h-7 w-7 md:h-10 md:w-10 relative", className)}>
            <Image src={`/${src}`} alt="profile" fill/>
        </div>
    )
}