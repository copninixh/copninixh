import {Component} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CopninichLogo from 'public/copninich.png'

export default class Mainpage extends Component {
    render (){
        return(
            <>
                <nav className="bg-transparent p-2 mt-0 fixed w-full z-10 top-0">
                    <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open menu</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        src={CopninichLogo}
                                        alt="Copninich Logo"
                                        className="block h-16 w-auto lg:hidden"
                                    />
                                    <Image
                                        src={CopninichLogo}
                                        alt="Copninich Logo"
                                        className="hidden h-16 w-auto lg:block"
                                    />
                                </div>
                            </div>
                            
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link href="/" className="bg-white text-dark px-3 py-2 rounded-full text-md font-medium">Home</Link>
                                        <Link href="portfolio" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-md font-medium" >Portfolio</Link>
                                        <Link href="skills" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-md font-medium">Skiils</Link>
                                        <Link href="interests" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-md font-medium">Interest</Link>
                                        <Link href="blog" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full text-md font-medium">Blog</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </nav>
            </>
        )
    }
}