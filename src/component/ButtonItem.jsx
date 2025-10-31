"use client"
import { ShoppingCartItem } from '@/context/ShoppingCartItem'
import React, { useContext } from 'react'

function ButtonItem(props) {

  const {handelIncreaseProductQty , carts , handelDecreaseProductQty , getNumber} = useContext(ShoppingCartItem)
  
  return (
    <div  className='border border-trans flex justify-between items-center mt-5'>
      <button onClick={()=>handelDecreaseProductQty(props.id)}  className='btn1'>-</button>
      <span>{getNumber(props.id)}</span>
      <button onClick={()=>handelIncreaseProductQty(props.id)} className='btn1'>+</button>
    </div>
  )
}

export default ButtonItem