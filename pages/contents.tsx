import { NextPage } from 'next'
import React from 'react'
import Content from '../components/Common/Content'

const Contents:NextPage = ({ contents }: any) => {
  const content = contents.results

  return (
    <section>
      {content.map((content: any, index:number) => {
        return (
          <Content key={index} content={content} />
        )
      })}
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

export default Contents