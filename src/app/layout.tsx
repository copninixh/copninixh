import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import MySOP from './component/sop'
import {Button} from '@material-tailwind/react'
import Footer from './component/footer'
import Navbar from './component/navbar'
import Banner from './component/banner'
import ThingsILove from './component/things'
import Skill from './component/skill'
import Experience from './component/Experience'
import Project from './component/project'
import Recommendation from './component/recommendation'
import Providers from './provider'




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
          <Banner/>
          <ThingsILove/>
          <Skill />
          <Experience/>
          <Project/>
          <Recommendation/>
          <MySOP/>
          <Footer/>
          {children}
        </Providers>


        {children}
      </body>
    </html>
  )
}
