import Link from 'next/link';
import Image from 'next/image';
export const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <Image src='/logo.svg' alt="logo" width={200} height={50} />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-gray-700">Politics</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Philosophy</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">About Us</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Support</a>
                </div>
                <a href="#" className="hidden  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Latest Issue</a>

                <button id='menu-btn' className='open block hamburger md:hidden focus:outline-none'>
                    <span className=' hamburger-top'></span>
                    <span className=' hamburger-middle'></span>
                    <span className=' hamburger-bottom'></span>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className="absolute z-10 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                    <a href="#" className="text-gray-500 hover:text-gray-700">Politics</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Philosophy</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">About Us</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Support</a>
                </div>
            </div>
        </nav>
    )
}