import React from 'react'

import Link from 'next/link'

const CtaContent = () => {
  return (
    <>
    <div className="w-full h-full max-w-[1340px] ml-auto mr-auto flex justify-center items-center">
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-4xl font-semibold tracking-tight leading-normal text-center">Begin your STEM journey today.</h1>
            <Link href="/register">
            <button className="p-3 bg-white text-black rounded-md cursor-pointer text-sm font-medium">Get Started</button>
            </Link>
            
        </div>
    </div>
    </>
  )
}

export default CtaContent