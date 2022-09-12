import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function ContentDetail({ contents }: any) {
  const router = useRouter()
  const contentId = router.query.id
  const content = contents.results.find(( content:any ) => content.id === contentId)
  console.log(content)
  
  return (
    <section className='w-2/3 mx-auto my-12'>
      <div className='w-full mx-auto mt-12 px-16'>
        <Image 
          src={content.cover.external.url}
          alt="Content Image"
          width={900}
          height={400}
        />
        <div className='flex mt-8 justify-between items-center'>
          <span className='text-2xl font-semibold'>{content.properties.Name.title[0].text.content}</span> 
          <span className='text-base text-[#ccc] font-thin'>#{content.properties.Series.select.name}</span>
      </div>
      <div className='mt-5 flex justify-between'>
        <div className='flex'>
            {content.properties.Keyword.multi_select.map((keyword: any, index: number) => {
              return (
                <span key={index} className="px-2 bg-slate-100 text-[#333] font-semobold rounded-md mr-2">{keyword.name}</span>
              )
            })}
        </div>
        <span className='text-base text-[#ccc]'>{content.properties.Date.date.start}</span>
      </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json', 
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.BLOG_DATABASE_APIKEY}`
    },
    body: JSON.stringify({
      sorts: [
          {
              "property": "Name",
              "direction": "ascending"
          }
      ],
      page_size: 100
    })
  };

  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.BLOG_DATABASE_ID}/query`, options)
  const contents = await response.json()

  return {
    props: { contents }
  }
}

export default ContentDetail