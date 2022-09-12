import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Content({ content }) {
  console.log(content)
  const coverImage = content.cover.external.url
  const link = content.id
  const title = content.properties.Name.title[0].text.content
  const createdAt = content.properties.Date.date.start
  const keywords = content.properties.Keyword.multi_select
  // const series = content.properties.Series.select.name

  return (
    <Link href={`contents/${link}`}>
      <section className='w-full h-auto my-8 shadow-xl rounded-md hover:cursor-pointer p-4 flex items-center hover:bg-[#eee] duration-200'>
        <div className='w-3/4 mr-6'>
          {/* <span>{series}</span> */}
          <span className='text-lg'>{title}</span>
          <div>description</div>
          <div className='flex justify-between'>
            <div className='mt-8'> 
              <span>{keywords && keywords.map((keyword: any, index: number) => {
                return (
                  <div className="bg-slate-100 flex justify-center items-center text-[#333] text-sm font-semobold mr-1 rounded-md px-2" key={index}>{keyword.name}</div>
                )
                })}</span>
            </div>
            <span className='text-sm mt-8 text-[#ccc]'>{createdAt}</span>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <Image 
            src={coverImage}
            alt={title}
            width={200}
            height={120}
          />
        </div>
      </section>
    </Link>
  )
}

export default Content