"use client";

import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io"
import { BiInfoCircle, BiAtom, BiPaperPlane, BiDonateHeart } from "react-icons/bi"
import { GiGraduateCap } from "react-icons/gi"
import HamburgerMenu from './hamburger-menu'

import Link from 'next/link';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(prev => false)
  }

  const menuItems: {
    itemContent: React.ReactNode;
    itemLink: string;
    }[] = 
    [
    {
      itemContent: (
        <>
        <div className="flex items-center gap-2 justify-start"> 
          <BiInfoCircle 
          className="text-md"
          />
          <p className='opacity-90 font-medium text-md'>About</p>
        </div>
        </>
      ),
      itemLink: '/about',
    },
    {
      itemContent: (
        <>
        <div className="flex items-center gap-2 justify-start"> 
          <GiGraduateCap 
          className="text-md"
          />
          <p className='opacity-90 font-medium text-md'>Courses</p>
        </div>
        </>
      ),
      itemLink: '/courses',
    },
    {
      itemContent: (
        <>
        <div className="flex items-center gap-2 justify-start"> 
          <BiAtom 
          className="text-md"
          />
          <p className='opacity-90 font-medium text-md'>Research</p>
        </div>
        </>
      ),
      itemLink: '/research',
    },
    {
      itemContent: (
        <>
        <div className="flex items-center gap-2 justify-start"> 
          <BiPaperPlane 
          className="text-md"
          />
          <p className='opacity-90 font-medium text-md'>Blog</p>
        </div>
        </>
      ),
      itemLink: '/blog',
    },
    {
      itemContent: (
        <>
        <div className="flex items-center gap-2 justify-start"> 
          <BiDonateHeart 
          className="text-md"
          />
          <p className='opacity-90 font-medium text-md'>Donate</p>
        </div>
        </>
      ),
      itemLink: '/donate',
    },
  ];

  return (
    <>
    <nav className="w-full bg-white px-5 py-4 flex items-center justify-between min-h-[76px] max-w-[1340px] ml-auto mr-auto">
        {/* Temporary Logo */}
        <h1 className="text-2xl font-bold tracking-tight cursor-pointer">Codeify</h1>

        {/* Nav Links */}
        <ul className="lg:flex items-center gap-10 hidden">
            <li>
              <Link 
              href="/about"
              >
                <p className="text-lg font-medium  py-1 opacity-90 hover:opacity-100 hover:text-blue-600 transition-all duration-200 ease-in-out">About</p>
              </Link>
            </li>

            <li>
              <Link 
              href="/courses"
              >
                <p className="text-lg font-medium  py-1 opacity-90 hover:opacity-100 hover:text-blue-600 transition-all duration-200 ease-in-out">Courses</p>
              </Link>
            </li>

            <li>
              <Link 
              href="/research"
              >
                <p  className="text-lg font-medium  py-1 opacity-90 hover:opacity-100 hover:text-blue-600 transition-all duration-200 ease-in-out">Research</p>
              </Link>
            </li>

            <li>
              <Link 
              href="/blog"
              >
                <p className="text-lg font-medium  py-1 opacity-90 hover:opacity-100 hover:text-blue-600 transition-all duration-200 ease-in-out">Blog</p>
              </Link>
            </li>

            <li>
              <Link 
              href="/donate"
              >
                <p className="text-lg font-medium  py-1 opacity-90 hover:opacity-100 hover:text-blue-600 transition-all duration-200 ease-in-out">Donate</p>
              </Link>
            </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5">
          <Link
          href="/register"
          className="hidden md:block"
          >
            <button className="px-5 py-2.5 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium">
              Register
            </button>
          </Link>


          
          <div 
          className="bg-white p-1.5 rounded-md border-[1px] border-gray-200 cursor-pointer hover:bg-gray-50 flex items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(true)}
          >
            {/* Hamburger Menu */}
            <IoMdMenu 
            className="text-3xl cursor-pointer hover:text-neutral-900 text-neutral-700"
  
          />
          </div>
          
        </div>
        
    </nav>
    <HamburgerMenu 
    isOpen={menuOpen}
    closeMenu={closeMenu}
    menuItems={menuItems}
    />
    </>
  )
}

export default Navbar