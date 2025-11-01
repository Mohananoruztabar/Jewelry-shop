// app/not-found.js
'use client'
import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">404 - Not Found</h2>
          <p>Could not find requested resource</p>
        </div>
      </div>
    </Suspense>
  )
}