import Link from 'next/link'
import React from 'react'

function InfBanner() {
  return (
    <div className='flex mt-10'>
        <div className='flex bg-accent py-15 px-10 w-1/2'>
            <figure>
                <img className='w-[450px] object-cover' src="/banner-back-6.webp" alt="" />
            </figure>
            <div className='m-10 text-right'>
                <h5 className='text-[13px] text-gray-500'>NEW COLLECTION</h5>
                <h2 className='font-bold text-3xl mt-3'>WEDDING RINGS</h2>
                <p className='w-[85%] text-gray-500 mt-10 ml-15'>Celebrate your love with our exquisite collection of wedding rings</p>
                <Link href="/store"><button className='border px-8 py-2 mt-8 hover:bg-black hover:text-white transition-all duration-300 group ease-in-out'>Discover more <i className='ri-arrow-right-long-line ease-in-out opacity-0 group-hover:opacity-100 transition-opacity group-hover:transition-all group-hover:duration-500'></i></button></Link>
            </div>
        </div>
        <div className='bg-primary flex pt-15 w-1/2'>
            <div className='m-10'>
                <h5 className='text-[13px] text-gray-500'>NEW COLLECTION</h5>
                <h2 className='font-bold text-3xl mt-3'>WEDDING RINGS</h2>
                <p className='w-[85%] text-gray-500 mt-10'>Celebrate your love with our exquisite collection of wedding rings</p>
                <Link href="/store"><button className='border px-8 py-2 mt-8 hover:bg-black hover:text-white transition-all duration-300 group ease-in-out'>Discover more <i className='ri-arrow-right-long-line ease-in-out opacity-0 group-hover:opacity-100 transition-opacity group-hover:transition-all group-hover:duration-500'></i></button></Link>
           
            </div>
            <figure>
                <img className='pe-5 w-[400px]' src="/banner-back-7.webp" alt="" />
            </figure>
        </div>
    </div>
  )
}

export default InfBanner