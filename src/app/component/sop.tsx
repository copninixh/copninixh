import {Button} from '../../../lib/tailwind'
import Image from 'next/image';
import CopninichPurpose1 from '/public/cop_01.png'
import CopninichPurpose2 from '/public/cop_02.png'
import CopninichPurpose3 from '/public/cop_03.png'
import CopninichPurpose4 from '/public/cop_04.png'
import CopninichPurpose5 from '/public/cop_05.png'

const MySOP= () => {
    
    return(
        <>
        <div className='container mx-auto px-8 md:px-20 hidden sm:block xl:block lg:block md:block'>
            <div className='columns-1 justify-center mt-[100px] mb-[100px]'>
                <h4 className="text-center font-bold text-2xl">Statement of Purpose</h4>
                <p className='text-center text-gray-custom'>It stands the test of time, it’s never weak, never brief</p>
                <div className="flex justify-center mt-4">
                    <Button variant="filled" className='button-color button-text'><i className="fal fa-file-alt"></i>&nbsp; My SOP</Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-6 lg:gap-0 justify-center mt-4 ">
                    <div className='flex items-center justify-center'>
                        <Image
                            src={CopninichPurpose1}
                            alt="Copninich Purpose"
                            className='w-img'
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image
                            src={CopninichPurpose2}
                            alt="Copninich Purpose"
                            className='w-img mt-img'
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image
                            src={CopninichPurpose3}
                            alt="Copninich Purpose"
                            className='w-img'
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image
                            src={CopninichPurpose4}
                            alt="Copninich Purpose"
                            className='w-img mt-img'
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <Image
                            src={CopninichPurpose5}
                            alt="Copninich Purpose"
                            className='w-img'
                        />
                    </div>


                </div>

               

            </div>
        </div>  
        </>
    );
}

export default MySOP;