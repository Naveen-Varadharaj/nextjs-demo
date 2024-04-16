import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-gray-700 px-2 py-2 text-white'>
      <nav className='flex flex-row gap-x-4 justify-center'>
        <Link href='/'><h1>Home</h1></Link>
        <Link href='/list'> <h1>Products</h1></Link>
        <Link href='/contacts'> <h1>Contact</h1></Link>
      </nav>
    </div>
  )
}