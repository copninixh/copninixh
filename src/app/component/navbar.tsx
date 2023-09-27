// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import CopninichLogoDark from '/public/copninich_dark.png'

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex flex-col'>
          <div className='flex items-center gap-2 '>
            <Link href="/">
              <Image
                src={CopninichLogoDark}
                alt=''
                className='w-12'
              />
            </Link>

            <div className="h-10 w-[2px] bg-line mx-auto"></div>


          

            <Link href="/">
              <p className="text-black ">Kampanart Chai</p>
            </Link>

          </div>
        </div>

        {/* Hamburger menu button */}
      
        {/* Mobile menu */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/about">
            <p className="text-black">Home</p>
          </Link>
          <Link href="/services">
            <p className="text-black">Skills</p>
          </Link>
          <Link href="/contact">
            <p className="text-black">Experience</p>
          </Link>
          <Link href="/contact">
            <p className="text-black">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="text-black">Contact</p>
          </Link>
          <Link href="/">
            <i className="far fa-moon font-bold"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
