import React from 'react'

import { BiCodeCurly } from "react-icons/bi"
import { RiTestTubeLine } from "react-icons/ri"
import { LiaMedalSolid } from "react-icons/lia"

const QuickAboutContent = () => {

    const cardStyles: string = "flex flex-col px-5 py-7 bg-gray-800 border-2 border-gray-700 items-center justify-center gap-5 lg:max-w-[32%] rounded-sm mt-3"

  return (
    <>
    <div className="pb-14 mb-14 mt-7">
        <h1 className="w-full text-center text-3xl tracking-tight font-semibold text-gray-200">What is The Codeify Foundation?</h1>
        <p className="mt-7 text-center lg:max-w-[50%] ml-auto mr-auto text-gray-300">Codeify is a nonprofit organization which offers accessible coding education to every student; enabling mastery of crucial concepts and fostering digital innovation, using <span className="text-white font-medium">just 3 steps.</span> </p>

        {/* Cards */}
        <div className="w-full md:max-w-[80%]  lg:max-w-[80%] xl:max-w-[70%] ml-auto mr-auto mt-14 flex justify-between items-center gap-2 flex-wrap">

            <div className={`${cardStyles}`}>
                <BiCodeCurly 
                className="text-3xl"
                />
                <h1 className="text-center text-2xl font-semibold text-gray-50">Educate</h1>
                <p className="text-center text-[0.9rem] leading-snug text-gray-400">Codeify teaches students vital concepts needed in the STEM field. From there, students are exposed to more advanced and creative concepts, which they can use to expand their knowledge.</p>
            </div>

            <div className={`${cardStyles}`}>
                <RiTestTubeLine 
                className="text-3xl text-white"
                />
                <h1 className="text-center text-2xl font-semibold text-gray-50">Practice</h1>
                <p className="text-center text-[0.9rem] leading-snug text-gray-400">Codeify teaches students vital concepts needed in the STEM field. From there, students are exposed to more advanced and creative concepts, which they can use to expand their knowledge.</p>
            </div>

            <div className={`${cardStyles}`}>
                <LiaMedalSolid 
                className="text-3xl text-white"
                />
                <h1 className="text-center text-2xl font-semibold text-gray-50">Certify</h1>
                <p className="text-center text-[0.9rem] leading-snug text-gray-400">Codeify teaches students vital concepts needed in the STEM field. From there, students are exposed to more advanced and creative concepts, which they can use to expand their knowledge.</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default QuickAboutContent;