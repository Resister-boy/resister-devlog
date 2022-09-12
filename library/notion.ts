import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.BLOG_DATABASE_APIKEY
})

export const getDatabase = async() => {
  const getContentsDatabase= await notion.databases.query({
    database_id: process.env.BLOG_DATABASE_ID
  })
  return getContentsDatabase
}

export const getPages = async(id: string) => {
  const getContentPage = await notion.pages.retrieve({
    page_id: id
  })
  return getContentPage
}

export const getBlocks = async(id: string) => {
  const getContentBlock = await notion.blocks.children.list({
    block_id: id
  })
  return getContentBlock
}