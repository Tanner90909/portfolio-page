import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-primary'>
        <div className='container mx-auto flex justify-between items-center'>
        <div>
            <Link className='text-platinum hover:text-white text-lg font-bold' href='#'>Logo</Link>
        </div>
        <div className='flex space-x-4'>
            <Link className='text-platinum hover:text-white text-lg font-bold' href='#'>Projects</Link>
            <Link className='text-platinum hover:text-white text-lg font-bold' href='#'>About Me</Link>
            <Link className='text-platinum hover:text-white text-lg font-bold' href='#'>Contact Me</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar