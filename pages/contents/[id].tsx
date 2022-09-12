import React from 'react'
import { useRouter } from 'next/router'

function ContentDetail() {
  const router = useRouter()
  console.log(router)
  
  return (
    <div>ContentDetail</div>
  )
}

export default ContentDetail