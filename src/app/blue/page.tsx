import React from 'react'
import Image from 'next/image'
import { stylefont } from '../UI/fonts'
import CommentsSec from '../components/commentsSec'

const page = () => {
  return (
    <div className=' pt-12  '>
        <div className=' flex gap-12 items-center justify-center'>
      {/* left side div  */}
      <div><Image src={'/ssss.webp'} alt={'Dress pic'} width={300} height={200}></Image></div>

      {/* right side div  */}
      <div className='space-y-6 pt-4'>
<h1 className={`${stylefont.className} text-3xl font-bold `}> Bonanza Satrangi GRANDIOSE </h1>
<h1 className='underline pt-4'>Unstitched 3-Piece Suit</h1>
<h3 className='pt-4'><span className='text-md font-bold '>Shirt: </span>
Dyed Embroidered Light Weight Khaddar 2.25M</h3>

<h3 className='pt-3'>
<span className='text-md font-bold '>Dupatta: </span>
Digital Printed Shawl 2.5M</h3>

<h3 className='pt-3'>
<span className='text-md font-bold'>Embroidery: </span>
Border On Organza 2M</h3>

<h3 className='pt-3'><span className='text-md font-bold'>Trouser: </span>
Dyed Light Weight Khaddar Trouser 1.8M</h3>

<h3>
<span className='text-md font-bold'>Trouser: </span>
    Bonanza Satrangi Rang Kahani is pakistani branded suit 100% Original and Shipping World wide.</h3>

</div>

      </div>
<div className='text-center'>
      <CommentsSec/>
      </div>
    </div>
  )
}

export default page
