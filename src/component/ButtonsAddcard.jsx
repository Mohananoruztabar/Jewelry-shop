"use client"
import { ShoppingCartItem } from '@/context/ShoppingCartItem'
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ButtonsAddcard(props) {

    const {handelIncreaseProductQty } = useContext(ShoppingCartItem)

    const handleAddToCart = () => {
      handelIncreaseProductQty(props.id)
    
    }

  return (
    <div>
        <div className='text-xl mt-2 hover:text-white'>
            <button onClick={handleAddToCart} className='bg-secondery w-full py-3 hover:bg-black '><i className="ri-shopping-cart-2-line"></i> Add to card<i className="ri-arrow-right-long-line"></i></button>
        </div>
        <div className='text-xl mt-2 text-white'>
           <Link href="/cart"> <button onClick={()=>handelIncreaseProductQty(props.id)} className='w-full bg-pink py-3 hover:bg-black'><i className="ri-shopping-cart-2-line"></i> Buy now <i className="ri-arrow-right-long-line"></i></button></Link>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default ButtonsAddcard