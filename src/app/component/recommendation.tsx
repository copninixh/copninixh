// components/Pills.tsx
import React from 'react';

const Recommendation = () => {
  return (
    <>
        <div className='container mx-auto px-8 md:px-20'>
          <div className='columns-1 justify-center mt-16'>
                <h4 className="text-center font-bold text-2xl">Bringing a personal touch</h4>
                <p className='text-center text-gray-custom'>My work and academic experiences</p>
             

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-10">
                    <div className="w-full rounded-[20px] border-2 shadow px-16 pt-16 pb-16 text-center">
                        <i className="fal fa-microchip text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                    </div>

                    <div className="w-full rounded-[20px] border-2 shadow px-16 pt-16 pb-16 text-center">
                        <i className="fal fa-microchip text-7xl"></i>
                        <p className='text-center mt-3 font-semibold'>Machine Learning</p>
                    </div>

                </div>

               

            </div>
        </div>
    </>
  );
};

export default Recommendation;
