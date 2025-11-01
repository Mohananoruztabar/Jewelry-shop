"use client"
import { ShoppingCartItem } from '@/context/ShoppingCartItem'
import React from 'react'
import { useContext } from "react";


function ProductItem(props) {

    const {handelIncreaseProductQty} = useContext(ShoppingCartItem)
  return (
    <div className='border-trans flex w-[250px] h-[400px] justify-center items-center mb-10 hover:border-pink border'>
        <div className=''>
            <figure>
                <img className='w-[200px]' src={props.img} alt="" />
            </figure>
            <div className='mt-6 text-center'>
                <h3 className='mt-2 hover:text-pink'>{props.name}</h3>
                <div className='mt-2'>
                    <i className="ri-star-line text-pink"></i>
                    <i className="ri-star-line text-pink"></i>
                    <i className="ri-star-line text-pink"></i>
                    <i className="ri-star-line text-pink"></i>
                </div>
                <h4 className='m-2 text-pink'>{(props.price.toFixed(2))} <span>$</span></h4>
                <button onClick={()=>{handelIncreaseProductQty(props.id)}} className='hover:text-pink'>Add to card <i className="ri-arrow-right-long-line"></i></button>
            </div>

        </div>
    </div>
  )
}

export default ProductItem