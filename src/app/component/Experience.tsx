// components/Pills.tsx
import React from 'react';

const Experience = () => {
  return (
    <>
        <div className='container mx-auto px-20'>
          <div className='columns-1 justify-center mt-16'>
                <h4 className="text-center font-bold text-2xl">Experiences</h4>
                <p className='text-center text-gray-custom'>My work and academic experiences</p>
             

                <div className="flex flex-row gap-8 justify-center mt-4">
                    <div className="w-1/2 rounded-[20px] border-2 border-black border-opacity-10 px-16 pt-16 pb-16 text-center">
                        <i className="fal fa-microchip text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                    </div>

                    <div className="w-1/2 rounded-[20px] border-2 border-black border-opacity-10 px-16 pt-16 pb-16 text-center">
                        <i className="fal fa-microchip text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                    </div>

                </div>

               

            </div>
        </div>
    </>
  );
};

export default Experience;
