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


  
  return (
    <div>
      slow
    </div>
  )


};
