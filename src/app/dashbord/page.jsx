"use client"
import React, { useState } from 'react'
import Container from '@/component/Container'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashbord() {

    const [newProduct , setNewProduct] = useState({
        name : "" ,
        img : "" ,
        price : "" ,
        description : "" ,
        category : ""
    })

    const handelnewproduct = () => {
       const productToAdd = {
        id: Math.floor(Math.random() * 10000).toString(),
        name: newProduct.name,
        category: newProduct.category,
        price: parseFloat(newProduct.price),
        imd: newProduct.img,
        description: newProduct.description
       }  
       toast.success("Product has been added successfully!...")
    }
  return (
    <div>
        <h3 className='text-3xl mx-10 mt-10'>Add New Product</h3>
        <div className='bg-ngray mt-5 py-1'>
            <Container>
                <div className='py-5'>
                    <label className='text-2xl' htmlFor="txt1">Name :</label>
                    <input value={newProduct.name} onChange={(e)=>{setNewProduct({...newProduct , name: e.target.value})}} id='txt1' type="text" className='py-2 block border border-pink w-[70%] outline-0 px-2' />
                </div>
                <div className='py-5'>
                    <label className='text-2xl' htmlFor="txt2">Image :</label>
                    <input value={newProduct.img} onChange={(e)=>{setNewProduct({ ...newProduct, img: e.target.value })}} id='txt2' type="text" className='py-2 block border border-pink w-[70%] outline-0 px-2' />
                </div>
                <div className='py-5 '>
                    <label className='text-2xl' htmlFor="txt3">Price :</label>
                    <input value={newProduct.price} onChange={(e)=>{setNewProduct({...newProduct , price: e.target.value})}} id='txt3' type="text" className='py-2 block border border-pink w-[70%] outline-0 px-2' />
                </div>
                <div className='py-5 '>
                    <label className='text-2xl' htmlFor="txt4">Category :</label>
                    <input value={newProduct.category} onChange={(e)=>{setNewProduct({...newProduct , category: e.target.value})}} id='txt4' type="text" className='py-2 block border border-pink w-[70%] outline-0 px-2' />
                </div>
                <div className='py-5'>
                    <label className='text-2xl' htmlFor="txt5">Description :</label>
                    <input id='txt5' onChange={(e)=>{setNewProduct({...newProduct , description: e.target.value})}} value={newProduct.description} type="text" className='py-4 block border border-pink w-[70%] outline-0 px-2' />
                </div>
                <button onClick={handelnewproduct} className='px-8 py-4 bg-pink text-white hover:bg-black hover:text-white mt-4'>Add new product</button>
            </Container>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default Dashbord