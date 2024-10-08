import React from 'react';
import './Footer.css';
import facebook from "../assets/image/facebook.svg";
import lincedin from "../assets/image/lincedin.svg";
import insta from "../assets/image/instagram.svg";
import booksLogo from "../assets/image/booksLogo.svg"

const Footer = () => {
    return (
        <footer className="footer  bg-gray-900 text-white py-6 relative w-full">
            <div className='container mx-auto max-w-7xl  '>
                <div className='flex justify-between items-start'>

                    <div className='flex flex-col justify-center items-center gap-1 mb-5'>
                        <h1 className='text-3xl text-yellow-600 font-bold cursor-pointer'><a href="#">WorldBooks</a></h1>
                        <a href="#"><img src={booksLogo} alt="sayt logo icon " width={90} height={90} /></a>
                    </div>

                    <div className=''>
                        <h4 className='font-bold text-2xl text-yellow-600 mb-2'>More info</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">Home</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">About US</a></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='font-bold text-2xl text-yellow-600 mb-2'>Learn</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in'  href="#">Blog</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">Podcats</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">Subscribe</a></li>
                        </ul>
                    </div>

                    <div className='   mb-4'>
                        <h4 className='font-bold text-2xl text-yellow-600 mb-2'>Contact US</h4>
                        <ul className='flex flex-col gap-2'>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">Telegram</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">Twitter</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">+998 (90) 91-109-11-03</a></li>
                            <li><a className='hover:text-yellow-700 transition duration-150 ease-out hover:ease-in' href="#">books@gmail.com</a></li>
                        </ul>
                        <div className="flex justify-center  gap-5 mt-3">
                            <img src={lincedin} alt="lincedin icon" width={30} height={30} className="cursor-pointer" />
                            <img src={facebook} alt="facebook icon" width={30} height={30} className="cursor-pointer" />
                            <img src={insta} alt="instagram icon" width={30} height={30} className="cursor-pointer" />
                        </div>
                    </div>

                </div>
                <hr />
                <p className='text-center mt-5 font-[300] tracking-[.25em]'>&copy; 2024 Avazbek Marufjonov Davrobekvich | 6-oy Imtixon Loyhasi.</p>

            </div>
        </footer>
    );
};

export default Footer;
