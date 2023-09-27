import {Typography} from '../../../lib/tailwind'
import Image from 'next/image';
import Copninich from '/public/copninich.png'

const Footer = () =>{
    return(
        <footer className="w-full bg-footer p-4 bottom-0">
            <div className="flex flex-row flex-wrap items-center justify-between gap-6 bg-footer text-center md:justify-between">
                <div className="flex items-center">
                    <Image 
                        src={Copninich}
                        alt="logo-ct" 
                        className="w-20 img-footer" 
                    />
                </div>
                <div className="flex flex-col"> {/* Wrap both the ul and text in a flex column */}
                <ul className="flex items-end gap-4 ml-auto">
                    <li>
                    <i className="fab fa-github text-3xl text-white transition-colors hover:text-blue-500"></i>
                    </li>
                    <li>
                    <i className="fab fa-linkedin-in text-3xl text-white transition-colors hover:text-blue-500"></i>
                    </li>
                    <li>
                    <i className="far fa-envelope text-3xl text-white transition-colors hover:text-blue-500"></i>
                    </li>
                </ul>
                <div className="text-right font-normal text-white mt-2">
                    &copy; 2023 Kampanart Chai
                </div>
                </div>
            </div>
        </footer>


    );
}

export default Footer;



 
