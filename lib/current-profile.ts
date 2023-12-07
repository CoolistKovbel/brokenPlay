import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'


export const User = async () => {
  const session = await getServerSession(authOptions)
  console.log(session, "logging session from current-profile lib")
  return session?.user;
};
