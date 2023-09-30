import Link from "next/link";
import Image from "next/image";


const ThingsILove = () =>{
    return(
        <>
            <div className="container mx-auto px-8 md:px-16">
                <div className='columns-1 justify-center mt-[100px]'>
                    <h4 className="text-center font-bold text-2xl">Things I love</h4>
                    <p className='text-center text-gray-custom'>My passionate about Technology</p>
                

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center mt-10">
                        <div className="w-full rounded-[20px] border-2 border-gray-800 lg:px-16 pt-16 pb-16 text-center">
                            <i className="fal fa-microchip text-6xl sm:text-5xl lg:text-7xl"></i>
                            <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                        </div>

                        <div className="w-full rounded-[20px] border-2 border-gray-800 lg:px-16 pt-16 pb-16 text-center">
                            <i className="fab fa-osi font-bold text-6xl sm:text-5xl lg:text-7xl"></i>
                            <p className='text-center mt-3 font-semibold'>Open Source</p>
                        </div>

                        <div className="w-full rounded-[20px] border-2 border-gray-800 lg:px-16 pt-16 pb-16 text-center">
                            <i className="far fa-chalkboard text-6xl sm:text-5xl lg:text-7xl"></i>
                            <p className='text-center mt-3 font-semibold'>Advisor</p>
                        </div>

                    </div>

                

                </div>
            </div>
        
        </>
    );
}

export default ThingsILove;