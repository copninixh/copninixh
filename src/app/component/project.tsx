// components/Pills.tsx
"use client";

import React from 'react';
import { Tab } from '@headlessui/react'
import Image from 'next/image';
import THND from '/public/thnd.png'
import PyThaiNLP from '/public/pythainlp.png'
import {Button} from '../../../lib/tailwind'
import Link from 'next/link';
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
        first_button: "https://github.com/copninich/TH-National-Document-OCR",
        second_button: "https://nlpforthai.com/tasks/ocr/",
      },
      {
        id: 2,
        title: "AeraX Valley x Fondue",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
        img_source: "/AeraX.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
    "Machine Learning": [
      {
        id: 1,
        title: 'THND-ThaiHoo OCR',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
        img_source: "/THND_OCR.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: 'Urban Issue Image Detection By YoLo for Traffy Fondue Plus',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        img_source: "/Fondue_Urban.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 3,
        title: 'Speech Emotions Recognition For MEMO Project',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        img_source: "/NSC_SER.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 4,
        title: 'The Customization of Name Entity Recognition for Thai Annals',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        img_source: "/PongsawaML.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 5,
        title: '',
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
        title: 'The 1st National Basic STEM Innovation E-FORUM 2021',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        img_source: "/STEM_2021.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: "Certificate of The 2nd National Basic STEM Innovation Hybrid Forum 2022",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/STEM_2022.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 3,
        title: "The Mockup Parliament of Chulalongkorn University 2023",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/CU_Parliament.jpeg",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 4,
        title: "Farmer Market 4.0",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/NSC_Web.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 5,
        title: "Yupparaj Wittayalai School Official Website (Front-end)",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/YRC_Web.jpeg",
        project_detail: "",
        first_button: "",
        second_button: "",
      },

      {
        id: 6,
        title: "Yupparaj's Electronic Voting System 2020 Edition",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/YRC_Vote.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 7,
        title: "Yupparaj Electronic Documents (Beta Version)",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/YRC_E-docs.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 8,
        title: "The C language learning Platfrom for YRC Students",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/YRC_C.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 9,
        title: "Yupparaj's Next.js official website (Beta Version)",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        img_source: "/YRC_Next.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
    ],
    "Microcontroller": [
      {
        id: 1,
        title: 'MEMO Box based on Raspberry Pi 4',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        img_source: "/MEMO_Box.png",
        project_detail: "",
        first_button: "",
        second_button: "",
      },
      {
        id: 2,
        title: "Arduino RB3",
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
          <p className='text-center text-gray-custom mb-10 dark:text-[#94a3b8]'>Projects based learning</p>

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
                          ? 'bg-custom dark:bg-[#003D7C] shadow text-white '
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
                      'rounded-xl p-3',
                    
                    )}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {posts.map((post) => (


                        <div key={post.id} className="w-full rounded-[20px] border-2 dark:border-[#94a3b8] shadow pb-16 mb-10 mt-10 animate-fade-up animate-once">
   
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
                                  <Link href={post.first_button}>
                                    <Button variant="filled" className='button-color bg-[#192635] border-4 border-[#192635] button-text mt-3'><i className="fab fa-github text-white" style={{fontSize:"14px"}}></i>&nbsp; Github Repository</Button>
                                  </Link>
                                  {post.second_button === ''?(
                                    <></>
                                  ): (
                                    <Link href={post.second_button}>
                                      <Button variant="filled" className='border-2 border-[#192635] text-dark button-color ml-2 button-text mt-3'>
                                        <Image width={20} height={20} alt="" className='del' src={PyThaiNLP} />
                                        NLP For Thai           
                                      </Button>
                                    </Link>
                                  )}
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

