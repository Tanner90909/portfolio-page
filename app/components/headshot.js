import React from 'react'
import Image from 'next/image'

function Headshot() {
  return (
    <div>
        <img className='rounded-full w-72' src='/img/headshot.jpg' alt='headshot' />
    </div>
  )
}

export default Headshot