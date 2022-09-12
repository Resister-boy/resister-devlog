import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Project({ project }) {
  console.log(project)
  const link = project.id
  const id = project.id.slice(30, project.id.length - 1)
  const image = project.properties.Image.files[0].external.url
  const title = project.properties.Name.title[0].text.content
  const description = project.properties.Description.rich_text[0].text.content.slice(0, 40)
  const stacks = project.properties.Tech.multi_select
  const createdAt = project.created_time.slice(0, 10)
  
  return (
    <Link href={`projects/${link}`}>
      <section className='w-80 h-88 relative rounded-xl shadow-xl my-8 hover:bg-[#eee] hover:cursor-pointer duration-100'>
        <div className='flex justify-center'>
          <Image 
            src={image}
            alt={title}
            width={300}
            height={200} 
          />
        </div>
        <div className='w-5/6 mx-auto mt-4 flex justify-between items-center'>
          <span className='text-xl text-[#333]'>{title}</span>
          <span className='text-base font-thin tracking-wide text-[#ccc]'>#{id}</span>
        </div>
        <div className='w-5/6 mx-auto mt-2'>
          <span className='text-base text-[#292929]'>
            <span>{description}</span>
            {description.length > 30 ? <span className='ml-1'>...</span> : null}</span>
        </div>
        <div className='w-5/6 mx-auto flex'>
          <div className='flex flex-wrap mt-3'>{stacks && stacks.map((stack: any, index: number) => {
            return (
              <div key={index} className="bg-slate-100 rounded-md flex justify-center items-center text-[#333] py-1 px-2 text-xs font-semibold mr-1">{stack.name}</div>
            )
          })}</div>
        </div>
        <div className='w-5/6 mx-auto my-2 flex justify-end text-sm text-[#ccc]'>{createdAt}</div>
      </section>
    </Link>

  )
}

export default Project