import Link from "next/link";
import Image from "next/image";
import {Button} from '../../../lib/tailwind'
import Profile from '/public/profile.png'


const Banner = () => {
    return (
        <>
            <div className="container mx-auto px-6 mt-[100px] hidden xl:block">
                <div className="flex items-center justify-center">

                    <div className="flex w-1/6 justify-center items-center">
                        <div className="w-[59px] h-[293px] relative">
                            <div className="w-[59px] h-[293px] left-0 top-0 absolute rounded-[20px] border-2 border-gray-800 dark:border-white" />
                            <div className="w-[59px] h-0.5 left-0 top-[22px] absolute bg-gray-800 dark:bg-white" />
                            <div className="w-[13px] h-[13px] left-[23px] top-[245px] absolute bg-gray-800 rounded-full dark:bg-white" />
                            <div className="left-[19px] top-[60px] absolute text-black dark:text-white text-xl font-normal">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="left-[20px] top-[119px] absolute text-black dark:text-white text-xl font-normal">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div className="left-[19px] top-[179px] absolute text-black dark:text-white text-xl font-normal">
                                <i className="far fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                  
                    
                    <div className="w-1/2">
                        <p className="text-gray-custom text-2xl dark:text-[#94a3b8]">Sawasdee</p>
                        <h3 className="text-gray-custom text-4xl font-bold dark:text-white">Cop Kampanart</h3>
                        <p className="text-gray-custom2 mt-4 dark:text-[#94a3b8]">
                            Hi, I&apos;m a high school graduate from Thailand. <br/>
                            I have conducted research and developed a keen  <br/>
                            interest in ML, DL, NLP, Tabular Data, and Data Science.
                        </p>
                        <Button variant="filled" className='bg-[#192635] dark:bg-[#003D7C] button-color button-text mt-4'><i className="fal fa-file-alt"></i>&nbsp; My Resume</Button>
                    </div>
            
                    <div className="flex w1/2 justify-end items-end">
                        <Image
                            src={Profile}
                            alt="My Profile"
                            className="w-3/5"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 px-16 mt-top">
                    <i className="far fa-level-down-alt text-3xl"></i>
                    <p>Scroll Down</p>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-[100px] hidden xl:hidden lg:block">
                <div className="flex items-center justify-center">
                    <div className="w-1/2">
                        <p className="text-gray-custom text-2xl">Sawasdee</p>
                        <h3 className="text-gray-custom text-4xl font-bold">Cop Kampanart</h3>
                        <p className="text-gray-custom2 mt-4">
                            Hi, I&apos;m a high school graduate from Thailand. <br/>
                            I have conducted research and developed a keen  <br/>
                            interest in ML, DL, NLP, Tabular Data, and Data Science.
                        </p>
                        <Button variant="filled" className='bg-[#192635] dark:bg-[#003D7C] button-color button-text mt-4'><i className="fal fa-file-alt"></i>&nbsp; My Resume</Button>
                    </div>
            
                    <div className="flex w1/2 justify-end items-end">
                        <Image
                            src={Profile}
                            alt="My Profile"
                            className="w-3/5"
                        />
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-16 mt-[150px] hidden xl:hidden lg:hidden md:block">
                <div className="flex items-center justify-center">

            
                  
                    
                    <div className="w-1/2">
                        <p className="text-gray-custom text-2xl">Sawasdee</p>
                        <h3 className="text-gray-custom text-4xl font-bold">Cop Kampanart</h3>
                        <p className="text-gray-custom2 mt-4">
                            Hi, I&apos;m a high school graduate from Thailand. <br/>
                            I have conducted research and developed a keen  <br/>
                            interest in ML, DL, NLP, Tabular Data, and Data Science.
                        </p>
                        <Button variant="filled" className='bg-[#192635] dark:bg-[#003D7C] button-color button-text mt-4'><i className="fal fa-file-alt"></i>&nbsp; My Resume</Button>
                    </div>
            
                    <div className="flex w-1/2 justify-end items-end">
                        <Image
                            src={Profile}
                            alt="My Profile"
                            className="w-4/5"
                        />
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-16 mt-[150px] hidden sm:block xl:hidden lg:hidden md:hidden ">
                <div className="grid grid-cols-1 justify-center">

                    <div className="w-full justify-center content-center px-8">
                        <Image
                            src={Profile}
                            alt="My Profile"
                            className="w-full"
                        />
                    </div>
                  
                    
                    <div className="w-full mt-10">
                        <p className="text-gray-custom text-2xl">Sawasdee</p>
                        <h3 className="text-gray-custom text-4xl font-bold">Cop Kampanart</h3>
                        <p className="text-gray-custom2 mt-4">
                            Hi, I&apos;m a high school graduate from Thailand. <br/>
                            I have conducted research and developed a keen  <br/>
                            interest in ML, DL, NLP, Tabular Data, and Data Science.
                        </p>
                        <Button variant="filled" className='bg-[#192635] dark:bg-[#003D7C] button-color button-text mt-4'><i className="fal fa-file-alt"></i>&nbsp; My Resume</Button>
                    </div>
            
                    
                </div>

            </div>

            <div className="container mx-auto px-8 mt-[120px] block sm:hidden xl:hidden lg:hidden md:hidden ">
                <div className="grid grid-cols-1 justify-center">

                    <div className="w-full justify-center content-center px-8">
                        <Image
                            src={Profile}
                            alt="My Profile"
                            className="w-full"
                        />
                    </div>
                  
                    
                    <div className="w-full mt-10">
                        <p className="text-gray-custom text-2xl">Sawasdee</p>
                        <h3 className="text-gray-custom text-4xl font-bold">Cop Kampanart</h3>
                        <p className="text-gray-custom2 mt-4">
                            Hi, I&apos;m a high school graduate from Thailand. <br/>
                            I have conducted research and developed a keen  <br/>
                            interest in ML, DL, NLP, Tabular Data, and Data Science.
                        </p>
                        <Button variant="filled" className='button-color button-text mt-4'><i className="fal fa-file-alt"></i>&nbsp; My Resume</Button>
                    </div>
            
                    
                </div>

            </div>
        </>

    );
}

export default Banner;