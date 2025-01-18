import React from 'react'
import { stylefont } from '../UI/fonts'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='bg-black text-white '>
        <div className='flex justify-between py-4 ml mx-8  mb-6 items-center'>     
           
           <Link href={'/'}>
           <div className={`${stylefont.className} hover:text-blue-600 text-5xl font-bold `}>
           Bonanza Satrangi </div>
           </Link>
               
        <div className='flex gap-8 text-2xl'>

            <Link className='hover:text-blue-600 cursor-pointer ' href={'/'}>Home</Link>
            <Link className='hover:text-blue-600 cursor-pointer ' href={'about'}>About</Link>
        </div>
        </div>

    </nav>
  )
}

export default navbar
