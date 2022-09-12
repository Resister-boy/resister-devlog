import React from 'react'

function text({ contents }: any) {
  console.log(contents)
  return (
    <div>text</div>
  )
}

export async function getServerSideProps() {

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json', 
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PROJECT_DATABASE_APIKEY}`
    }
  };
  
  const response = await fetch('https://api.notion.com/v1/pages/cc39e3ff-d7f0-420e-8aff-3b6e52984123', options)
  const contents = await response.json()

  return {
    props: { contents }
  }
}

export default text