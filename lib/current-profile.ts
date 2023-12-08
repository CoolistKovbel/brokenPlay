// request Gets user from server

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'


export const User = async () => {
  const session = await getServerSession(authOptions)
  return session?.user;
};
