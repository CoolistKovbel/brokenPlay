import { prisma } from "../lib/db";

interface initialProfileProps {

}

interface ProfileCreateInput {
  userId: string;
  email: string;
  imageUrl: string;
  username: string;
  password: string;
}

export const initialProfile = async () => {



  // const profile = await prisma.profile.findUnique({
  //     where: {
  //         eddress: "0x1C352E8F3e035c524F2385818b44859906d3c705" // make better
  //     }
  // })

  // if(profile) {
  //     return profile
  // }

  
  return (
    <div>
      slow
    </div>
  )


};
