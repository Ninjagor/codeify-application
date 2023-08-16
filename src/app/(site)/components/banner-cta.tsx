"use client";

import React, { useState } from 'react'
import Link from 'next/link'

import clsx from 'clsx';

import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai"
import { BiChevronRight } from "react-icons/bi"

interface BannerCtaProps {
    closable?: boolean,
    callContent: string,
    actionContent: string,
    url: string,
}

const BannerCta: React.FC<BannerCtaProps> = ({ closable, callContent, actionContent, url }) => {

    const [closed, setClosed] = useState<boolean>(false);
    

    return (
        <div className={clsx(`
        px-5 py-4 bg-blue-700 text-white/90 w-full relative flex justify-between gap-2 items-center sm:justify-center flex-wrap transition-all duration-100 ease-out h-fit
        `, closed && "!py-0 !px-0 max-h-0")}>
            <div className="flex flex-wrap items-center">
                <p className="text-md tracking-regular font-medium mr-3">{callContent}</p>
                <Link 
                href={url}
                className="font-medium text-white/70 flex gap-0.5 items-center justify-center group hover:text-white/100 transition-all duration-100"
                >
                <p>{actionContent}</p>
                <BiChevronRight 
                className="text-2xl m-0 ml-[-5px]"
                />
                
                </Link>
                
            </div>
            {
            closable
            &&
            <AiOutlineClose 
            className="cursor-pointer sm:absolute right-5"
            onClick={() => setClosed(prev => true)}
            />
            }
            
        </div>
    )
}

export default BannerCta;