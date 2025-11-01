import Container from '@/component/Container'
import Paginate from '@/component/Paginate'
import ProductItem from '@/component/ProductItem'
import SliderShop from '@/component/SliderShop'
import Link from 'next/link'
import React from 'react'


async function getProduct(page  , per_page , name){
  const result = await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&name=${name}`,
    { cache: "no-store" }
  )
  const data = await result.json()
  return data
}

async function Store(props) {


  const page =  (await props.searchParams)?.page || "1"
  const per_page =  (await props.searchParams)?.per_page || "12"
  const name = (await props.searchParams)?.name || ""


  const products = await getProduct(page , per_page , name )
  

  
  return (
    <div>
        <Container>
            <h2 className='font-bold text-4xl text-center mt-12'>Shop</h2>
            <div>
                <SliderShop />
            </div>
            <div className='grid grid-cols-4'>
              {products.data.map((item , i) =>{
                return(
                  <Link key={i} href={`/store/product/${item.id}`}>
                    <ProductItem  {...item}  />
                  </Link>
                  )
              })}
            </div>

            <Paginate pageCount={products.pages}/>
          </Container>
    </div>
  )
}

export default Store