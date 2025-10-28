"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import ReactPaginate from "react-paginate";

function Paginate({pageCount}) {

    const router = useRouter()
    const searchParams = useSearchParams ()

    const handlePageClick = (e) =>{
        const selecte = e.selected +1
        
        const currentSearchParams = new URLSearchParams(searchParams.toString())

        currentSearchParams.set("page" , selecte.toString())
        currentSearchParams.set("per-page" , "12")

        router.push(`/store?${currentSearchParams.toString()}`)
    }


  return (
    <div className="flex justify-center mt-8 cursor-pointer">
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 p-2 rounded-lg"
        pageClassName="border rounded-md px-3 py-1 border-trans hover:bg-pink hover:text-white"
        activeClassName="bg-pink text-white"
        previousClassName="rounded-md px-3 py-1 flex items-center"
        nextClassName="rounded-md px-3 py-1 flex items-center"
        disabledClassName="opacity-50"

      />
    </div>
  )
}

export default Paginate