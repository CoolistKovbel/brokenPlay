// Create a initial profile launch


import { prisma } from "../lib/db";
import { User } from "./current-profile";

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

  const d =  User()
  console.log(d)
  
  return (
    <div>
      slow
    </div>
  )


};
