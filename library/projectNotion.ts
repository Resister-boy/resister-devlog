import { Client } from '@notionhq/client';

const client = new Client({
    auth: process.env.PROJECT_DATABASE_APIKEY,
});

async function projectDatabase() {
    const myPosts = await client.databases.query({
        database_id: `${process.env.PROJECT_DATABASE_ID}`,
    });
    return myPosts;
}

async function projectPage(id: string) {
    const myPost = await client.pages.retrieve({
        page_id: id,
    });
    return myPost;
}

async function projectBlocks(id: string) {
    const myBlocks = await client.blocks.children.list({
        block_id: id
    });
    return myBlocks;
}


export {
  projectDatabase,
  projectPage,
  projectBlocks
}