"use client"
import { ShoppingCartItem } from "@/context/ShoppingCartItem"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ButtonItem from './ButtonItem'
import dataapi from "@/dataBase/db.json"
import Cart from "@/app/cart/page"

function CartItem({id}) {

    const { carts } = useContext(ShoppingCartItem)

    const [items , setItems] = useState({})


    
    useEffect(()=>{
        if (!id) return;

        const productData = dataapi.products.find(p => p.id === id);
        setItems(productData);
        
    } , [id])

    if (!items?.id) return null

  const cartItem = carts.find(item => item.id === id)
  const quantity = cartItem?.qty || 0
  const subTotal = ((items.price || 0) * quantity).toFixed(2)

    
  return (
    <div>
        <div className='grid grid-cols-12 border border-trans mb-2'>
            
            <img className='grid col-span-3 object-cover' src={items.imd} alt="" />
            <div className='grid col-span-9'>
                
                <div className='grid grid-cols-8 items-center '>
                    <h3 className='grid col-span-3'>{items.name}</h3>
                    <h4 className='grid col-span-1'>{items.price}</h4>
                    <h4 className='grid col-span-1'>{subTotal}$</h4>
                    <div className='grid col-span-3 mb-3 me-2'>
                        <ButtonItem id={id}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem