import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
              <Image
                src='/images/Logo.png'
                alt='logo'
                width={90}
                height={90}
                className='relative'
            /></span>
            <p className='text-slate-500'>moulegacy@gmail.com</p>
            <p className='text-slate-500'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer