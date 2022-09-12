import React from 'react'
import { getDatabase } from '../library/notion'

interface Props {
  getDatabase: [any]
}

function text<Props>({ getDatabase }) {

  console.log(getDatabase)
  return (
    <div>text</div>
  )
}

export async function getServerSideProps() {

  const { results } = await getDatabase()

  return {
    props: {
      getDatabase: results
    }
  }

}

export default text