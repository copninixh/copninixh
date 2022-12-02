import Headset from '../components/Headset'
import Navigationbar from '../components/Navigationbar'
import InformationBox from '../components/InformationBox'
import Footer from '../components/Footer'
import 'animate.css';
import React from 'react';
import ReactLoading from 'react-loading';

export default function IndexPage() {
  return (  
    <div>
      <Headset/>
      <main className="bg-gradient" >
        <Navigationbar/>

        <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col h-screen justify-center">
            <div className=''>
              <InformationBox/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}