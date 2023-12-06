import { Group, Member, Profile } from "@prisma/client"

export type ServerWithMembersWithProfiles = Group & {
    members: (Member & {profile: Profile})[]
}