import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

function ProjectDetail({ projects }: any) {
  const router = useRouter()
  const projectId = router.query.id
  const project = projects.results.find((project:any) => project.id === projectId)
  console.log(project)

  return (
    <section className='w-2/3 mx-auto my-12'>
      <div className='w-full mx-auto mt-12 px-16'>
        <Image 
            src={project.properties.Image.files[0].external.url}
            alt="Project Image"
            width={900}
            height={400}
          />
        <div className='flex mt-8 justify-between items-center'>
          <span className='text-2xl font-semibold'>{project.properties.Name.title[0].text.content}</span>
          <div className='flex'>{project.properties.Tech.multi_select.map((stack:any, index:number) => {
            return (
              <div key={index} className="mx-2 px-3 py-1 bg-[#eee] rounded-xl">{stack.name}</div>
            )
          })}</div>
        </div>
        <div className='mt-5'>
          <span>{project.properties.Description.rich_text[0].text.content}</span>
        </div>
          <div className='flex mt-12'>
            <Link href={project.properties.Github.url}>
              <a target="_blank" className='flex items-center px-4 py-1 border-2 border-slate-200 hover:bg-slate-200 rounded-lg duration-200 mr-4'>
                <span className='mr-2'>Github</span>
                <Image
                  src="/assets/github-link-icon.svg"
                  alt="Github Link"
                  width={20}
                  height={20}
                />
              </a>
            </Link>
            {project.properties.Deploy.url === null 
              ?  <div className='flex items-center px-4 py-1 border-2 border-slate-200 bg-slate-200 rounded-lg duration-200 opacity-50'>
                  <span className='mr-2'>Deploy</span>
                  <Image 
                    src="/assets/cancel-icon.svg"
                    alt="cancel"
                    width={20}
                    height={20}
                  />
                </div>
              :  <Link href={project.properties.Deploy.url}>
                  <a target="_blank" className='flex items-center px-4 py-1 border-2 border-slate-200 hover:bg-slate-200 rounded-lg duration-200'>
                    <span>Deploy</span>
                    <Image
                      src="/assets/link-icon.svg"
                      alt="Deploy Link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>}
          </div>
          <div className='text-right text-[#ccc]'>
            <span className='text-[#ccc]'>{project.properties.Duration.date.start}</span>
             {` ~ `} 
            <span className='text-[#ccc]'>{project.properties.Duration.date.end}</span>
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
      Authorization: `Bearer ${process.env.PROJECT_DATABASE_APIKEY}`
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
  
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.PROJECT_DATABASE_ID}/query`, options)
  const projects = await response.json()

  return {
    props: {projects},
  }
}

export default ProjectDetail