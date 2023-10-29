import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {Button} from '@material-tailwind/react'
import MySOP from './component/SOP'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import ThingsILove from './component/ThingsILove'
import Skill from './component/Skill'
import Experience from './component/Experience'
import Project from './component/Project'
import Recommendation from './component/Recommendation'
import Providers from './provider'
import { Suspense } from 'react'




const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Copninich Kampanart Chaimooltan',
  description: 'Kampanart Personal Website',
}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
      </head>
      <body className={poppins.className}>
      
        <Providers>
          
            <Navbar/>
            <Banner />
            <ThingsILove/>
            <Skill />
            <Experience/>
            <Project/>
            <Recommendation/>
            <MySOP/>
            <Footer/>
          
        </Providers>

      </body>
    </html>
  )
}
