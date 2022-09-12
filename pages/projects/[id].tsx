import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import React from 'react'
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring';
import { projectDatabase, projectPage, projectBlocks } from '../../library/projectNotion'

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  let { id } = context.params as IParams; 
  let page_result = await projectPage(id); 
  let { results } = await projectBlocks(id); 

  return {
    props: {
      id,
      project: page_result,
      blocks: results
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let { results } = await projectDatabase(); 
  return {
    paths: results.map((post) => { 
      return {
        params: { 
          id: post.id
        }
      }
    }),
    fallback: false
  }
} 

interface Props {
  id: string,
  project: any,
  blocks: [any]
}

const renderBlock = (block: any) => {
  switch (block.type) {
   case 'paragraph': 
      return <div className='my-4'>{
           typeof block.paragraph.rich_text[0] !== 'undefined'
           ? <p className='text-md'>{block.paragraph.rich_text[0].text.content}</p>
           : <div className='w-full h-2'></div>
           }</div> 
   case 'heading_1':
       return <p className='text-3xl font-semibold'>{block.heading_1.rich_text[0].text.content}</p>
   case 'heading_2':
       return <p className='text-3xl font-semibold'>{block.heading_2.rich_text[0].text.content}</p>
   case 'heading_3':
       return <p className='text-xl font-semibold'>{block.heading_3.rich_text[0].text.content}</p>
   case 'heading_4':
       return <p className='text-lg font-semibold'>{block.heading_4.rich_text[0].text.content}</p>
   case 'heading_5':
       return <p className='text-base font-semibold'>{block.heading_5.rich_text[0].text.content}</p>
   case 'bulleted_list_item': 
       return (
         <ul className='mt-8'>
           <li className='list-[square] mt-4 text-base font-semibold ml-4'>{block.bulleted_list_item.rich_text[0].text.content}</li>
         </ul>
       )
   case 'numbered_list_item':
       return (
         <ol className='mt-8'>
           <li className='mt-4 text-lg font-normal'>{block.numbered_list.item.rich_text[0].text.content}</li>
         </ol>
       )
   case 'code': 
       return (
           <div className='bg-[#E9E9E9] rounded-md'>
             <p className='text-[#292929] py-4 px-8'>{block.code.rich_text[0].text.content}</p>
           </div>
         )
   case 'image':
       return (
         <div className='w-full my-5 flex justify-center items-center'>
           <Image 
             src={block.image.file.url}
             alt="image"
             width={700}
             height={300}
           />
         </div>
       )
   case 'bookmark': {
       return (
         <Link href={block.bookmark.url}>
           <a className='my-4'>
             {block.bookmark.url}
           </a>
         </Link>
       )
   }
   default: 
       return <p>{` `}</p>
  }
}

const ProjectDetail:NextPage<Props> = ({id, project, blocks}) => {
  console.log(id)
  console.log(project)

  return (
    <section className='w-2/3 mx-auto my-12'>
        <Head>
         <title>
           {project.properties.Name.title[0].text.content}
         </title>
       </Head>
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

export default ProjectDetail