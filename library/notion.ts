import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.BLOG_DATABASE_ID
})

export const getDatabase = async() => {
  const getContents = await notion.databases.query({
    database_id: process.env.BLOG_DATABASE_ID
  })
  return getContents
}