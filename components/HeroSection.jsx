"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>
              Hello, I&apos;m{" "} 
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'James',
                1000,
                'Web developer',
                1000,
                'Fullstack developer',
                1000,
                'React native developer',
                1000,
                'Python developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
        <p className='text-[#ADB7BE text-lg sm:text-lg mb-6 lg:text-xl'>
            Full stack Web applications by extending the latest React features, 
            and integrating powerful Rust-based JavaScript tooling for the fastest builds.
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 text-white hover:bg-slate-200'>
            Hire Me
          </button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              Download CV
            </span>
            </button>
        </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src="/images/hero-image.png"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={400}
              height={400}
            />
          </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection;