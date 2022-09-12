import Image from "next/image"
import Link from "next/link"

export const renderBlock = (block: any) => {
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