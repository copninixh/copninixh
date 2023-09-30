// components/Pills.tsx
"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import Image from 'next/image';
import THND from '/public/thnd.png'
import {Button} from '../../../lib/tailwind'

import { useState } from 'react'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function createMarkup(text: string[]) {
  return { __html: text };
}

export default function Project() {
  let [categories] = useState({
    "All": [
      {
        id: 1,
        title: 'THND-ThaiHoo OCR',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
        img_source: "/thnd.png",
        project_detail: "THND OCR (Thai National Documents) is an OCR tool for reading Thai national documents. This OCR tool is fine-tuned on Tesseract an open source with a training set of 50k sentences, in addition to, validations set of 10k sentences",
        first_button: "<Button variant=filled' className='button-color button-text'><i className='fal fa-file-alt'></i>&nbsp; My SOP</Button>",
        second_button: "",
      },
      {
        id: 2,
        title: "AeraX Valley x Fondue",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
        img_source: "/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
    "Machine Learning": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
    "Web Develop": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
    "Microcontroller": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/public/thnd.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
  })

  return (
    <div className='container mx-auto px-8 md:px-20'>
      <div className='justify-center mt-16'>
          <h4 className="text-center font-bold text-2xl">Projects</h4>
          <p className='text-center text-gray-custom mb-10'>Projects based learning</p>

            <Tab.Group>
              <Tab.List className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-3 md:py-1 text-sm font-medium leading-5 text-custom',
                        'ring-black ring-opacity-60 ring-offset-2 ring-offset-white-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-custom shadow text-white '
                          : 'hover:text-custom'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>

              
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                    
                    )}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {posts.map((post) => (


                        <div key={post.id} className="w-full rounded-[20px] border-2 shadow pb-16 mb-10 mt-10">
   
                                <Image 
                                  src={post.img_source}
                                  alt=""
                                  width={600}
                                  height={500}
                                  className='w-screen left-0 top-0 rounded-tl-[20px] rounded-tr-[20px]'
                                

                                />
                        
                                <div className='px-6'>
                                  <p className='text-xl mt-7 font-semibold'>{post.title}</p>
                                  <p className='mt-3 text-justify'>{post.project_detail}</p>
                                  
                                  <Button variant="filled" className='button-color button-text mt-3'><i className="fab fa-github text-white" style={{fontSize:"14px"}}></i>&nbsp; Github Repository</Button>
                                </div>

                        </div>

                      ))}
                    </div>

                     
                  </Tab.Panel>
                ))}
     
               
              </Tab.Panels>
            </Tab.Group>
          </div>
      </div>
  )
}

