
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const blogpage = ({item}: any) => {
  return (
    <div className=' ml mx-8 bg-slate-100'>
      <div className='ml mx-4 pt-4 pb-4'>
        
    
       <Image src={item.image?.asset?.url} width={400} height={200} alt={'no'}/>
        <h2 className='text-black font-bold text-2xl pt-4 max-w-sm mx-auto'>
          {item.productName}</h2>
  
        <p className='pt-4 max-w-sm mx-auto line-clamp-1'>{item.description}</p>
        <p className='pt-4 text-blue-500 font-bold mb-6'>{item.price}</p>

      {/* Read More dynamic Link */}
      <Link
          href={`/blog/${item.slug}`}
          className=' bg-black hover:bg-white hover:text-black
          border-2 border-black text-white  rounded-full 
          px-6 py-3 items-center'
        >
          Read More
        </Link>

        </div>

        
        {/* <Image
                  src={item.image?.asset?.url}
                  alt={item.productName}
                  width={300}
                  height={300}
                  className="object-cover rounded"
                /> */}
              
    </div>
  )
}

export default blogpage
