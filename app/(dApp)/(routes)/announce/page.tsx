"use client"

import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function Announce() {

  useEffect(() => {
    // Load Quill only on the client-side
    const Quill = require('quill');
    // Use Quill here if needed
  }, []); 

  return (
    <div className='pt-[100px] bg-[#222] w-full h-[100vh] text-emerald-500'>

      {/* Intro */}
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>Announcements 🌠</h2>
        <p className='text-md'>
          You have something you want to announce? share it for a chance to win some eth back as a reward.
        </p>
      </div>


      <div>

        <form>
        <ReactQuill />
          <button>submit</button>
        </form>



      </div>

    </div>
  )
}

export default Announce