
import {prisma} from "../lib/db"

interface ProfileCreateInput {
    userId: string;
    email: string;
    imageUrl: string;
    username: string;
    password: string;
}

export const initialProfile = async () => {


    // const user = await currentUser()

    // if(!user) {
    //     return redirectToSignIn()
    // }

    // const profile = await db.profile.findUnique({
    //     where: {
    //         userId: user.id
    //     }
    // })

    // if(profile) {
    //     return profile
    // }

    const newProfile = await prisma.profile.create({
        data: {

        } as ProfileCreateInput
    })

    return newProfile


}
