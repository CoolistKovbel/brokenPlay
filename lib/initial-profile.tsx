// Create a initial profile launch
import { useRouter } from "next/navigation";
import { prisma } from "../lib/db";
import { User } from "./current-profile";

// interface initialProfileProps {}

interface ProfileCreateInput {
  userId: string;
  email: string;
  imageUrl: string;
  username: string;
  password: string;
}

export const InitialProfile = async () => {
  const router = useRouter();
  const d = User(); //returns userID

  if (!d) {
    router.push("/");
  }

  const profile = await prisma.profile.findUnique({
    where: {
      userId: d,
    },
  });

  if (profile) {
    return profile;
  }

  return "slow";
};
