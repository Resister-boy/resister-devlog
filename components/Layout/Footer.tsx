import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full bg-[#F2F4FF]'>
      <div className='w-4/5 h-60 mx-auto flex items-center'>
        <div className='w-1/3'>
          <span className='text-2xl text-[#333]'>
            resister_devlog
          </span><br />
          <span>
            Deep dive into to Startup, Web 3.0
          </span>
        </div>
        <div className='w-2/3 border-l-2 border-[#333]'>
          <p>Connect</p>
          <Link href="https://github.com/Resister-boy">
            Github
          </Link>
          <Link href="https://www.instagram.com/resister_boy/">
            Instargram
          </Link>
          <Link href="https://twitter.com/resister_boy">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer