import { Component } from "react";
import Link from 'next/link'
import Image from 'next/image'
import ProfileMemoji from 'public/profile.png'


export default class Mainpage extends Component{
    render(){
        return(
            <>
          
                    <div className="bg-rose-50 2xl:py-48 xl:py-28 rounded-2xl mt-12 shadow">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <div className="flex justify-center">
                                    <Image 
                                        src={ProfileMemoji}
                                        className="h-64 w-auto"
                                        alt="Copninich Memoji"
                                    />
                                </div>
                                <p className="text-3xl font-box font-bold text-pink-400 sm:text-4xl ">Copninich</p>
                                <p className="mt-1 text-3xl font-box font-bold text-gray-900 sm:text-4xl">
                                    <span className="animate__animated animate__bounce animate__infinite">👋🏻 </span> 
                                    Kampanart Chaimooltan
                                </p>
                                <p className="mt-4 text-md text-gray-500">
                                    SAWASDEE! My name is Kampanart Chaimooltan You can call me “Cop”<br/>
                                    I’m student at Faculty of Engineering, Chulalongkorn University Bangkok Thailand
                                </p>
                            </div>
                        </div>
                    </div>
            
                <footer className="text-center mt-5 font-box text-white">
                    &copy; 2022 Copninich.data
                </footer>
            </>
        )
    }
}