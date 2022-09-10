import React from 'react'
import Link from 'next/link'
import Logo from '../Common/Logo'

function Header() {
  return (
    <header className='w-full bg-[#F2F4FF]'>
      <div className='w-4/5 h-auto mx-auto flex justify-between py-4 items-center'>
        <div className='w-2/3 flex justify-start'>
          <div className='w-1/4 text-left border-r-2 border-[#ccc]'>
            <Logo />
          </div>
          <nav className='w-1/2 flex justify-around items-center'>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/project">
              <a>Project</a>
            </Link>
            <Link href="/content">
              <a>Blog</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
        </div>
        <div className='text-[#333]'>
          Wallet Connect
        </div>
      </div>
    </header>
  )
}

export default Header