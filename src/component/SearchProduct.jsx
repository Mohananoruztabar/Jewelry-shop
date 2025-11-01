"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SearchProduct({ show, onClose }) {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (search.trim()) {
            // بدون استفاده از useSearchParams - ساده‌تر
            router.push(`/store?name=${encodeURIComponent(search.trim())}`)
        } else {
            router.push('/store')
        }
        onClose();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    if (!show) return null
    
    return (
        <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={onClose} 
        >
            <div 
                className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Search Products</h3>
                    <button onClick={onClose} className="text-gray-700 text-2xl">×</button>
                </div>
                <div className="flex gap-2">
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={handleKeyPress}
                        type="text"
                        placeholder="Type product name..."
                        className="flex-1 p-2 border rounded-md"
                        autoFocus
                    />
                    <button 
                        onClick={handleSearch} 
                        className="px-4 py-2 bg-pink text-white rounded-md hover:bg-pink/80"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct