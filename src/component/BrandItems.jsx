import React from 'react'
import Container from './Container'
import Link from 'next/link'

function BrandItems() {
  return (
    <div className='mt-20'>
        <Container>
            <h3 className='text-3xl text-center mt-10'>Shop By Brands</h3>
            <div className='grid grid-cols-5 gap-4 mt-10  place-items-center h-[130px]'>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Celestial.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Eastern.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Goddess.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Opulence.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Rommance.svg" alt="" />
                    </figure>
                </Link>
            </div>
            <div className='grid grid-cols-5 gap-4 mb-15 place-items-center h-[130px]'>
                <Link href='/'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Charm.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'> 
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Forest.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'> 
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Luxer.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/store'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Retro-Revival.svg" alt="" />
                    </figure>
                </Link>
                <Link href='/sore'>
                    <figure className='hover:border border-pink w-[200px] h-[100px] flex justify-center'>
                        <img className='w-[110px]' src="/Vintage.svg" alt="" />
                    </figure>
                </Link>
            </div>
        </Container>
    </div>
  )
}

export default BrandItems