import { NextPage } from 'next'
import React from 'react'


const Project:NextPage = ({ projects }: any) => {

  console.log(projects)

  return (
    <div>Project</div>
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

export default Project