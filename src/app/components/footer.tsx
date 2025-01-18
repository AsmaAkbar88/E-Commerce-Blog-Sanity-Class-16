import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { stylefont } from '../UI/fonts';


const footer = () => {
  return (
    <footer className=' bg-slate-300 flex justify-around  pt-8 items-center '>
      <div className=' flex  text-center'>
        <p>© 2025 <span className={`${stylefont.className} text-xl font-bold `}>
          Bonanza Satrangi</span></p></div>
      <div className='flex gap-8'>
        <p><FaInstagram /></p>
        <p><FaFacebook /></p>
        <p> <FaGithub /> </p>
        <p><FaTwitter /></p>
      </div>
    </footer>
  )
}

export default footer
