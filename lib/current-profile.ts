import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export const User = async () => {
  const session = await getServerSession(authOptions)

  return JSON.stringify(session?.user.userId);
};
