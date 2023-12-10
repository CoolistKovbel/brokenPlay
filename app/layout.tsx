import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { SocketProvider } from '@/components/providers/socket-provider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MysticMurko dApp',
  description: 'Welcome to the humble abys where we accept those who wander a place to look around and get their straight. Remeber to use time wisely and that brilliant head of yours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          <ModalProvider />
          <SocketProvider>
            {children}
          </SocketProvider>
        </Provider>
        <ToastContainer />
        </body>
    </html>
  )
}
