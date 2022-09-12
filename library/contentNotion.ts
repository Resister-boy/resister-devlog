import { Client } from '@notionhq/client';

const client = new Client({
    auth: process.env.BLOG_DATABASE_APIKEY,
});

async function contentDatabase() {
    const myPosts = await client.databases.query({
        database_id: `${process.env.BLOG_DATABASE_ID}`,
    });
    return myPosts;
}

async function contentPage(id: string) {
    const myPost = await client.pages.retrieve({
        page_id: id,
    });
    return myPost;
}

async function contentBlocks(id: string) {
    const myBlocks = await client.blocks.children.list({
        block_id: id
    });
    return myBlocks;
}


export {
  contentDatabase,
  contentPage,
  contentBlocks
}