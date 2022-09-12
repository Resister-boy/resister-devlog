import React from 'react'
import Link from 'next/link'

function Content({ content }) {
  console.log(content)
  // const coverImage = content.cover.external.url
  const link = content.id
  const title = content.properties.Name.title[0].text.content
  const createdAt = content.properties.Date.date.start
  const keywords = content.properties.Keyword.multi_select
  const series = content.properties.Series.select.name

  return (
    <Link href={`contents/${link}`}>
      <section>
        <span>{series}</span>
        <span>{title}</span>
        <span>{createdAt}</span>
        <span>{keywords.map((keyword: any, index: number) => {
          return (
            <div key={index}>{keyword.name}</div>
          )
        })}</span>
      </section>
    </Link>
  )
}

export default Content