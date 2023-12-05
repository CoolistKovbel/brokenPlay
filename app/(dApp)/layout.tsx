import React from 'react'

function dAppLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='w-full h-full'>
        <h2>Welcome to the dApp</h2>
        <div className='w-full h-full'>
            {children}
        </div>
    </div>
  )
}

export default dAppLayout