import React from 'react'
import Container from '@/component/Container'
import BlogsItem from '@/component/BlogsItem'
import Link from 'next/link'

async function Blog() {

  const result = await fetch("http://localhost:8000/blog")
  const data = await result.json()

  
  return (
    <div>
      <Container>
        <h2 className='mt-10 text-4xl'>BLOG</h2>
        <div className='grid grid-cols-3 gap-6 mt-10'>
          {data.map((item , i) => {
            return (
              <Link key={item.id} href={`/blog/${item.id}`}><BlogsItem  {...item} /></Link>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default Blog