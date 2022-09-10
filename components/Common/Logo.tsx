import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <span className='text-xl text-[#333] font-medium hover:cursor-pointer'>resister_devlog</span>
    </Link>
  )
}

export default Logo