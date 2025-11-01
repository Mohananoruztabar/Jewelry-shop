"use client"
import { ShoppingCartItem } from '@/context/ShoppingCartItem'
import CartItem from '@/component/CartItem'
import Container from '@/component/Container'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios, { Axios } from 'axios'

function Cart() {

  const { carts } = useContext(ShoppingCartItem)

  const [produc , setProduc] = useState ([])
  const [discountCode , setDiscountCode] = useState("")
  const [profitPrice , setProfitPrice] = useState(0)
  const [sub , setSub] = useState(0)

  useEffect(() =>{

    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => setProduc(data) )
  } , [])

  const handelDiscount = () =>{
    
    axios(`http://localhost:8000/discount?code=${discountCode}`)
    .then((res) => {
      console.log(res)
      const {data} = res
      setDiscountCode(data)

      const Profit = TotalPrice * data[0].persent / 100
      const SubTotal = TotalPrice - Profit

      setProfitPrice(Profit)
      setSub(SubTotal)
    })
  
  }
 

  



  const TotalPrice  = carts.reduce((totalPrice , item)=>{
    const selected = produc.find(para => para.id == item.id)
    return totalPrice + (selected?.price) * item.qty
  } , 0)

  return (
    <div className='mt-15'>
      <Container>
        <h2 className='text-4xl font-bold mt-10'>CART</h2>
        <div className='grid grid-cols-13 items-center mt-10'>
          <p className='grid col-span-3'></p>
          <p className='grid col-span-3'>Product</p>
          <p className='grid col-span-2 pl-20'>Price</p>
          <p className='grid col-span-2'>Subtotal</p>
          <p className='grid col-span-3'>Quantity</p>
        </div>
        <div className='mt-5'>
          {carts.map((item , i) => {
            return (
              <CartItem {...item} key={item.id} />
            )
          })}
        </div>
        <div className='border border-trans p-10 mb-20'>
          <h4>TotalPrice : <span>{(TotalPrice).toFixed(2)}$</span></h4>
          <h4 className='mt-5'>Profit : <span>{(profitPrice).toFixed(2)}%</span></h4>
          <h4 className='mt-5'>SubTotal : <span>{(sub).toFixed(2)}$</span></h4>
          <div className='mt-5'>
            <input onChange={(e)=>{setDiscountCode(e.target.value)}} type="text"  placeholder='Enter discount code' className='border border-pink px-4 py-2 outline-0'/>
            <button onClick={handelDiscount} className='bg-pink text-white px-4 py-2 ml-2'>Applay</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart