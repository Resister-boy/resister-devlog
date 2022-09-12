import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { contentDatabase, contentPage, contentBlocks } from '../../library/contentNotion'
// import { post, posts, blocks } from '../../library/projectNotion'

interface IParams extends ParsedUrlQuery {
   id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
   let { id } = context.params as IParams; 
   let page_result = await contentPage(id); 
   let { results } = await contentBlocks(id); 

   return {
     props: {
       id,
       post: page_result,
       blocks: results
     }
   }
}

export const getStaticPaths: GetStaticPaths = async () => {
   let { results } = await contentDatabase(); 
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
   post: any,
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
        return <p className='text-2xl font-semibold'>{block.heading_2.rich_text[0].text.content}</p>
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
    
const ContentDetail:NextPage<Props> = ({id, post, blocks}) => {
  console.log(id)
  console.log(post)
  console.log(blocks)
   return (
     <section className='w-2/3 mx-auto my-12'>
       <Head>
         <title>
           {post.properties.Name.title[0].text.content}
         </title>
       </Head>
      <div className='w-full mx-auto mt-12 px-16'>
        <Image 
          src={post.cover.external.url}
          alt="Content Image"
          width={900}
          height={400}
        />
        <div className='flex mt-8 justify-between items-center'>
          <span className='text-2xl font-semibold'>{post.properties.Name.title[0].text.content}</span> 
          <span className='text-base text-[#ccc] font-thin'>#{post.properties.Series.select.name}</span>
      </div>
      <div className='mt-5 flex justify-between'>
        <div className='flex'>
            {post.properties.Keyword.multi_select.map((keyword: any, index: number) => {
              return (
                <span key={index} className="px-2 bg-slate-100 text-[#333] font-semobold rounded-md mr-2">{keyword.name}</span>
              )
            })}
        </div>
        <span className='text-base text-[#ccc]'>{post.properties.Date.date.start}</span>
      </div>
      <div className='w-4/5 mx-auto mt-12 pt-8 border-t-2'>
        {
          blocks.map((block, index) => {
            return (
              <div key={index}>
                {
                  renderBlock(block)
                }
              </div>
            )})
        }
      </div>
      </div>
     </section>
   )
}

export default ContentDetail;



  
//   return (

//   )
// }


// export default ContentDetail