import SidebarTool from '@/components/sidebar/sidebar-tool'
import React from 'react'

function PurLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full">
        <div className="hidden md:flex h-full w-[120px] z-30 flex-col fixed inset-y-0">
            <SidebarTool />
        </div>
        <main className="md:pl-[120px] h-full">
            {children}
        </main>
    </div>
  )
}

export default PurLayout