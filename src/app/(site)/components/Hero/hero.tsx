"use client";

import Link from 'next/link';
import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai"


const Hero = () => {
  return (
    <>
    <section className="px-5 py-4 flex flex-col gap-2 justify-start items-center">

        

        <div className="flex flex-col gap-6 mt-16 z-20">
            <h1 className="transition-all duration-150 ease-out text-center tracking-tight font-bold text-4xl max-w-lg md:leading-tight sm:text-5xl md:max-w-lg lg:max-w-2xl lg:text-[3.4rem] flex flex-col gap-2 max-[380px]:text-3xl"><p className="whitespace-nowrap">Empowering Futures</p> <span className="text-blue-700">Through Code.</span></h1>
            <p className="text-center text-lg max-w-sm md:max-w-lg lg:max-w-lg mt-1 font-medium tracking-tight opacity-60">Providing world class education and innovation in the computer science field, for free.</p>
            <div className="flex w-full items-center justify-center gap-3  mt-4">
              <Link
              href="/register"
              >
                <button className="px-7 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 font-medium">Get Started</button>
              </Link>

              <Link
              href="/about/video"
              >
                <button className="px-7 py-3 bg-white border-2  text-blue-700 border-blue-700/70 hover:bg-blue-50 font-medium rounded-md  flex items-center justify-center gap-2"><AiFillPlayCircle className="text-xl" /> Watch demo</button>
              </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero