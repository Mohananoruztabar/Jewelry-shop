import Container from '@/component/Container'
import Paginate from '@/component/Paginate'
import ProductItem from '@/component/ProductItem'
import SliderShop from '@/component/SliderShop'
import Link from 'next/link'
import React from 'react'
import dataapi from "@/dataBase/db.json"


function getProduct(page = 1, per_page = 12, name = "") {
  let filtered = dataapi.products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  const startIndex = (page - 1) * per_page;
  const paginated = filtered.slice(startIndex, startIndex + per_page);

  return {
    data: paginated,
    pages: Math.ceil(filtered.length / per_page)
  };
}

function Store(props) {
  const page = props.searchParams?.page ? parseInt(props.searchParams.page) : 1;
  const per_page = props.searchParams?.per_page ? parseInt(props.searchParams.per_page) : 12;
  const name = props.searchParams?.name || "";

  const products = getProduct(page, per_page, name);
  

  
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