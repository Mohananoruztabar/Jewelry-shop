import Container from '@/component/Container'
import Paginate from '@/component/Paginate'
import ProductItem from '@/component/ProductItem'
import SliderShop from '@/component/SliderShop'
import Link from 'next/link'
import React from 'react'
import dataapi from "@/dataBase/db.json"

function getProduct(page = 1, per_page = 12, name = "") {
  let filtered = dataapi.products;
  
  if (name && name.trim() !== "") {
    filtered = dataapi.products.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  const startIndex = (page - 1) * per_page;
  const paginated = filtered.slice(startIndex, startIndex + parseInt(per_page));

  return {
    data: paginated,
    pages: Math.ceil(filtered.length / per_page)
  };
}

// تابع async کن
async function Store(props) {
  // await کن searchParams رو
  const searchParams = await props.searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const per_page = searchParams?.per_page ? parseInt(searchParams.per_page) : 12;
  const name = searchParams?.name || "";

  console.log('Search params:', { page, per_page, name }); // دیباگ

  const products = getProduct(page, per_page, name);

  return (
    <div>
        <Container>
            <h2 className='font-bold text-4xl text-center mt-12'>Shop</h2>
            <div>
                <SliderShop />
            </div>
            
            {/* نشان دادن نتیجه جستجو */}
            {name && (
              <div className='mt-4 text-center'>
                <p>Search results for: <strong>"{name}"</strong> ({products.data.length} products found)</p>
              </div>
            )}

            <div className='grid grid-cols-4'>
              {products.data.map((item) => {
                return(
                  <Link key={item.id} href={`/store/product/${item.id}`}>
                    <ProductItem {...item} />
                  </Link>
                )
              })}
            </div>

            {products.data.length === 0 && name && (
              <div className='text-center mt-8'>
                <p>No products found for "{name}"</p>
                <Link href="/store" className='text-pink hover:underline'>
                  View all products
                </Link>
              </div>
            )}

            <Paginate pageCount={products.pages}/>
          </Container>
    </div>
  )
}

export default Store