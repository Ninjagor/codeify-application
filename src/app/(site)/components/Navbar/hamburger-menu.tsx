import React from 'react'
import clsx from 'clsx';
import { AiOutlineClose } from "react-icons/ai"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HamburgerMenuProps {
    isOpen: boolean;
    closeMenu: () => void;
    menuItems: {
        itemContent: React.ReactNode;
        itemLink: string;
    }[]
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, closeMenu, menuItems }) => {

    const router = useRouter();

  return (
    <>
    <main className= {clsx(`
    w-full min-h-fit h-full z-50 fixed top-0  text-white backdrop-blur-[2px] transition-all duration-100 ease-out lg:hidden
    `, isOpen ? "pointer-events-auto bg-gray-800/60 opacity-100" : "pointer-events-none bg-transparent backdrop-blur-0 opacity-0")}>
        <div className={clsx(`
        absolute h-full w-full  overflow-y-auto  bg-gray-900 top-0 max-w-[19rem] py-4 px-5 transition-[right] duration-300 delay-75 ease-in-out 
        `, isOpen ? "!right-0" : "!-right-full")}>
            {/* Top bar */}
            <div className="flex w-full items-center gap-2 justify-between mt-3">
                <h1 className="text-xl font-medium">Menu</h1>
                <button 
                onClick={closeMenu}
                className="p-1.5 rounded-md hover:bg-gray-700 cursor-pointer transition-all duration-100"> 
                    <AiOutlineClose 
                    className="font-medium text-lg"
                    />
                </button>

            </div>

            {/* Divisor Bar */}
            <div 
            className="w-full h-[1px] bg-gray-700 my-5"
            />

            {/* Links */}
            <ul>
                {menuItems.map((item, index) => (
                    <li className="w-full py-2.5 px-3 rounded-md cursor-pointer bg-transparent hover:bg-gray-800 transition-all duration-75 ease-out"
                    key={index}
                    onClick={() => {
                        router.push(item.itemLink)
                    }}
                    >
                        {item.itemContent}
                    </li>
                ))}
            </ul>

            {/* Divisor Bar */}
            <div 
            className="w-full h-[1px] bg-gray-800 my-5"
            />

            {/* Buttons */}
            <div className="w-full  relative flex flex-col gap-2">
                    <Link
                    href="/register"
                    className=" w-full"
                    >
                        <button  className="w-full bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700">
                            <p className='text-sm font-medium'>Register</p>
                        </button>
                    </Link>
            </div>

        </div>
    </main>
    </>
  )
}

export default HamburgerMenu