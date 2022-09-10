import React from 'react'
import Image from 'next/image'
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
            Deep dive into the Startup, Web 3.0
          </span>
        </div>
        <div className='w-2/3 border-l-2 py-4 pl-12 border-[#333]'>
          <div>
            <span className='text-xl'>Connect</span>
            <div className='flex justify-start items-center mt-4'>
              <Image 
                src="/assets/mail-icon.svg"
                alt="main"
                width={23}
                height={23}
              />
              <span className='ml-4'>hassanpumped17@gmail.com</span>
            </div>
          </div>
          <div className='w-1/4 flex justify-between mt-4'>
            <Link href="https://github.com/Resister-boy">
              <a className='block mt-2' target="_blank">
                <Image 
                  src="/assets/github-icon.svg"
                  alt="github"
                  width={25}
                  height={25}
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/resister_boy/">
              <a className='block mt-2' target="_blank">
                <Image 
                    src="/assets/instagram-icon.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
              </a>
            </Link>
            <Link href="https://twitter.com/resister_boy">
              <a className='block mt-2' target="_blank">
                <Image 
                  src="/assets/twitter-icon.svg"
                  alt="twitter"
                  width={23}
                  height={23}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-12 flex justify-center items-center bg-[#D8DAE4]">
        <div className="text-[#333]">resister_devlog ⓒ{ new Date().getFullYear() } All Right Resolved.</div>
      </div>
    </footer>
  )
}

export default Footer