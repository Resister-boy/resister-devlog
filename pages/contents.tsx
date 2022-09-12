import { NextPage } from 'next'
import React from 'react'

const Contents:NextPage = ({ contents }: any) => {
  console.log(contents)
  return (
    <div>Content</div>
  )
}

export async function getServerSideProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json', 
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${'secret_OoMXYlZ6Jqh39BEFF0usIZIaZJoyM2q7GaIEApqkdOU'}`
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

  const response = await fetch(`https://api.notion.com/v1/databases/${'b806b6cc4e0f44918c0b46e6fe0a0598'}/query`, options)
  const contents = await response.json()

  return {
    props: { contents }
  }
}

export default Contents