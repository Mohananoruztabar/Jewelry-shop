"use client"
import Container from '@/component/Container'
import React from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Loging() {

    const router = useRouter();

    const handelClick = () => {

        const response = {
        token : "njdcck knfvfksjawlk cklsdncsncsak" ,
        expire : 7
    }
    Cookies.set("token" , response.token , {expires : response.expire})
    toast.success("Login successful! Redirecting to your dashboard...");

    setTimeout(() => {
      router.push("/dashbord");
    }, 2000);
    }


  return (
    <div>
        <Container>
            <h3 className='text-4xl mt-15'>My Account</h3>
            <section className='grid grid-cols-2 mt-15 gap-3'>
                <div className='border border-trans'>
                    <h4 className='text-2xl p-5'>Loging</h4>
                    <div className='p-5'>
                        <label className='' htmlFor="text1">Username or email address *</label>
                        <input id='text1' type="text" className='py-3 w-[90%] border border-gray-400 outline-gray-500'/>
                    </div>
                    <div className='p-5'>
                        <label className='' htmlFor="text2">Password  *</label>
                        <input id='text2' type="text" className='py-3 w-[90%] border border-gray-400 outline-gray-500'/>
                    </div>
                    <div className='flex p-5 items-center'>
                        <input type="radio" />
                        <p className='mx-2'>Remember me</p>
                        <button onClick={handelClick} className='bg-pink text-white px-8 py-5'>Loging</button>
                    </div>
                </div>
                <div className='border border-trans'>
                    <h4 className='text-2xl p-5'>Register</h4>
                    <div className='p-5'>
                        <label className='' htmlFor="text3">Email address  *</label>
                        <input id='text3' type="text" className='py-3 w-[90%] border border-gray-400 outline-gray-500'/>
                    </div>
                        <p className='px-5 py-2'>A link to set a new password will be sent to your email address.</p>
                        <p className='px-5 py-2'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button className='bg-pink text-white px-8 py-5 m-5'>Register</button>
                </div>
            </section>
        </Container>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default Loging