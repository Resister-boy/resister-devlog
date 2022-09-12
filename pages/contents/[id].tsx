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
       return <p>{block.paragraph.rich_text[0].text.content}</p> 
    // case 'heading_1':
    //     return <h1>{block.heading_1.rich_text[0].text.content}</h1>
    // case 'heading_2':
    //     return <h2>{block.heading_2.rich_text[0].text.content}</h2>
    // case 'heading_3':
    //     return <h3>{block.heading_3.rich_text[0].text.content}</h3>
    // case 'heading_4':
    //     return <h4>{block.heading_4.rich_text[0].text.content}</h4>
    // case 'heading_5':
    //     return <h5>{block.heading_5.rich_text[0].text.content}</h5>
    // case 'numbered_list_item':
    //     return <ol></ol>
    default: 
        return <p>{` `}</p>
   }
}
    
const Post:NextPage<Props> = ({id, post, blocks}) => {
  console.log(id)
  console.log(post)
  console.log(blocks)
  console.log(blocks[0])
   return (
     <div>
       <Head>
         <title>
           {post.properties.Name.title[0].text.content}
         </title>
       </Head>
       <div>
        {
          renderBlock(blocks[0])
        }
       </div>
       {/* {
         blocks.map((block, index) => {
           return (
             <div key={index}>
               {
                 renderBlock(block)
               }
             </div>
           )})
       } */}
     </div>
   )
}

export default Post;



// import React from 'react'
// import { useRouter } from 'next/router'
// import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
// import { ParsedUrlQuery } from 'querystring'
// import { getDatabase, getPages, getBlocks} from '../../library/notion'



// function ContentDetail({ contents }: any) {
//   const router = useRouter()
//   const contentId = router.query.id
//   const content = contents.results.find(( content:any ) => content.id === contentId)
//   console.log(content)
  
//   return (
//     <section className='w-2/3 mx-auto my-12'>
//       <div className='w-full mx-auto mt-12 px-16'>
//         <Image 
//           src={content.cover.external.url}
//           alt="Content Image"
//           width={900}
//           height={400}
//         />
//         <div className='flex mt-8 justify-between items-center'>
//           <span className='text-2xl font-semibold'>{content.properties.Name.title[0].text.content}</span> 
//           <span className='text-base text-[#ccc] font-thin'>#{content.properties.Series.select.name}</span>
//       </div>
//       <div className='mt-5 flex justify-between'>
//         <div className='flex'>
//             {content.properties.Keyword.multi_select.map((keyword: any, index: number) => {
//               return (
//                 <span key={index} className="px-2 bg-slate-100 text-[#333] font-semobold rounded-md mr-2">{keyword.name}</span>
//               )
//             })}
//         </div>
//         <span className='text-base text-[#ccc]'>{content.properties.Date.date.start}</span>
//       </div>
//       </div>
//     </section>
//   )
// }


// export default ContentDetail