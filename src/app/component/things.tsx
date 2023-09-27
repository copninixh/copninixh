import Link from "next/link";
import Image from "next/image";


const ThingsILove = () =>{
    return(
        <>
            <div className='columns-1 justify-center mt-16'>
                <h4 className="text-center font-bold text-2xl">Things I love</h4>
                <p className='text-center text-gray-custom'>Caption</p>
             

                <div className="flex flex-row gap-16 justify-center mt-4">
                    <div className="w-1/5 rounded-[20px] border-2 border-gray-800 px-16 pt-16 pb-16 text-center">
                        <i className="fal fa-microchip text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                    </div>

                    <div className="w-1/5 rounded-[20px] border-2 border-gray-800 px-16 pt-16 pb-16 text-center">
                        <i className="fab fa-osi text-7xl font-bold"></i>
                        <p className='text-center mt-3 font-semibold'>Open Source</p>
                    </div>

                    <div className="w-1/5 rounded-[20px] border-2 border-gray-800 px-16 pt-16 pb-16 text-center">
                        <i className="far fa-chalkboard text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Advisor</p>
                    </div>

                </div>

               

            </div>
        
        </>
    );
}

export default ThingsILove;