"use client"
import { ShoppingCartItem } from '@/context/ShoppingCartItem'
import { useContext , useState } from 'react'
import SearchProduct from './SearchProduct'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

    const {TotalQty} = useContext(ShoppingCartItem)
    const [showSearch, setShowSearch] = useState(false);

    const pathname = usePathname()
    const router = useRouter()


    const handleDashboardClick = () => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please log in to access your dashbord.");
    } else {
      router.push("/dashbord"); 
    }
  };


    const navLink = [
        {
            title : 'Home' ,
            href : '/'
        },
        {
            title : 'Store' ,
            href : '/store'
        },
        {
            title : 'Elements' ,
            href : '/elements'
        },
        {
            title : 'Blog' ,
            href : '/blog'
        },
        {
            title : 'About Us' ,
            href : '/aboutUs'
        },
        {
            title : 'Dashbord' ,
            href : '/dashbord'
        }
    ]
  return (
    <div className='bg-white h-[90px] flex items-center justify-center'>
        <Container>
            <div className='flex justify-between items-center'>
                <figure>
                    <img className='w-[200px]' src="/logo.svg" alt="" />
                </figure>
                <nav className=''>
                    {navLink.map((item)=>{
                        return(
                            <Link className={`px-2  relative ${item.href == pathname ?'text-pink ':''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-pink after:transition-all hover:after:w-full after:duration-300 after:mb-[-3]`} key={item.title} href={item.href}>{item.title}<i className="ri-arrow-down-s-line"></i></Link>
                        )
                    })}
                </nav>
                <div className='text-2xl flex'>
                    <div onClick={() => setShowSearch(true)} className="px-4 hover:text-pink cursor-pointer">
                       <i className="ri-search-line"></i>
                    </div>
                    <div onClick={handleDashboardClick} className="px-4 hover:text-pink cursor-pointer">
                        <i className="ri-dashboard-line"></i>
                    </div>
                    <Link className='px-4 hover:text-pink' href="/cart">
                       <i className="ri-shopping-cart-2-line"></i>
                       <span className='span2 bg-pink px-2 py-1 rounded-full text-[15px] text-white'>{TotalQty}</span>
                    </Link>
                    <Link className='px-4 hover:text-pink' href="/loging">
                       <i className="ri-user-3-line"></i>
                    </Link>
                </div>
                <SearchProduct show={showSearch} onClose={() => setShowSearch(false)} />
            </div>
        </Container>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default Navbar