// components/Navbar.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import CopninichLogoDark from '/public/copninich_dark.png'
import CopninichLogoLight from '/public/copninich.png'
import { useEffect, useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { useTheme } from 'next-themes';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [])

  if (!mounted){
    return null
  }

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='fixed top-0 w-full h-20 z-[100]'>
        <div className='flex justify-between items-center h-full w-full px-4 lg:px-24'>
            <div className='flex items-center gap-2'>
                <Link href="/">
                {resolvedTheme === 'dark'?(
                     <Image
                        src={CopninichLogoLight}
                        alt=''
                        className='w-12'
                    />
                ): (
                    <Image
                        src={CopninichLogoDark}
                        alt=''
                        className='w-12'
                    />
                )}
               
                </Link>

                <div className="h-10 w-[2px] bg-line mx-auto"></div>


            

                <Link href="/">
                    <p>Kampanart Chai</p>
                </Link>
            </div>

            <div className='hidden md:flex'>
                <ul className='hidden sm:flex'>
                    <Link href="/">
                        <li className="ml-6 hover:border-b">Home</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-6 hover:border-b">Skills</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-6 hover:border-b">Experience</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-6 hover:border-b">Projects</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-6 hover:border-b">Contact</li>
                    </Link>

                    <Link href="/">
                        <li className="ml-6 hover:border-b text-xl">
                            <button onClick={() => setTheme(resolvedTheme === 'dark'? 'light' : 'dark')}>
                                {resolvedTheme === 'dark'?(
                                    <i className="far fa-sun font-bold"></i>
                                ): (
                                    <i className="far fa-moon font-bold"></i>
                                )}
                                
                            </button>
                        </li>
                    </Link>
                </ul>
            </div>

            <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={25}/>
            </div>

            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>

                <div className='flex-col py-4'>
                    <ul>
                        <Link href="/">
                            <li className="py-4 cursor-pointer">Home</li>
                        </Link>

                        <Link href="/">
                            <li className="py-4 cursor-pointer">Skills</li>
                        </Link>

                        <Link href="/">
                            <li className="py-4 cursor-pointer">Experience</li>
                        </Link>

                        <Link href="/">
                            <li className="py-4 cursor-pointer">Projects</li>
                        </Link>

                        <Link href="/">
                            <li className="py-4 cursor-pointer">Contact</li>
                        </Link>

                        <Link href="/">
                            <li className="py-4 cursor-pointer">
                                <button onClick={() => setTheme(resolvedTheme === 'dark'? 'light' : 'dark')}>
                                    {resolvedTheme === 'dark'?(
                                        <i className="far fa-sun font-bold"></i>
                                    ): (
                                        <i className="far fa-moon font-bold"></i>
                                    )}
                                    
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>

                

            </div>
        </div>

    </nav>
  );
};

export default Navbar;
