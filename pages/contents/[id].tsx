import React from 'react'
import { useRouter } from 'next/router'

function ContentDetail() {
  const router = useRouter()
  const contentId = router.query.id
  
  return (
    <section>
      {contentId}
    </section>
  )
}

export default ContentDetail