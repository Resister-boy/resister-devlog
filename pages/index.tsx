import { NextPage } from 'next'
import Link from 'next/link'
import Animation from '../components/Common/Animation'

const Home:NextPage = () => {
  return (
    <section className='w-4/5 h-96 mx-auto my-16 flex items-center'>
      <div className='w-1/2'>
        <span className='text-3xl'>
          {`Deep dive into Startup & Programming & Web 3.0`}
        </span>
        <p className='mt-8'>
          {`Studying Web client & Smart Contract. My favorite programming language is javaScript and typeScript and I'm interested in Solidity, Golang and Rust. Also I'm dreaming to become a developer create greate product. Here is a space logging my life as a developer. Thank you for visiting.`}
        </p>
        <div className='w-full mt-12 flex justify-center'>
          <Link href="/project">
            <a className='block w-32 h-10 flex border-2 border-slate-200 justify-center items-center mx-4 rounded-xl hover:bg-slate-200 duration-200'>Go to Project</a>
          </Link>
          <Link href="/content">
            <a className='block w-32 h-10 flex border-2 border-slate-200 justify-center items-center mx-4 rounded-xl hover:bg-slate-200 duration-200'>Go to Blog</a>
          </Link>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
        <Animation />
      </div>
    </section>
  )
}

export default Home