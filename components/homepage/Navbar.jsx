import React from 'react';
import Link from 'next/link';
import styles  from '../../styles/Navbar.module.css';
import Image from 'next/image';
export const Navbar = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

    const handleClick = () => {
        setIsHamburgerOpen(current=>!current);
    }
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
                <a href="#" className="hidden  p-3 px-6 pt-2 text-white bg-politicalRed rounded-full baseline hover:bg-politicalOrange md:block">Latest Issue</a>

                <button id='menu-btn' className={styles.hamburger + ' block md:hidden focus:outline-none' + (isHamburgerOpen ? ` ${styles.open} ` : '') } onClick={ handleClick }>
                    <span className={styles.hamburgerTop}></span>
                    <span className={styles.hamburgerMiddle}></span>
                    <span className={styles.hamburgerBottom}></span>
                </button>
            </div>

            <div className="md:hidden">
                <div id="menu" className={"absolute z-10 flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" + (isHamburgerOpen ? ' flex ' : ' hidden ')}>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Politics</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Philosophy</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">About Us</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Support</a>
                </div>
            </div>
        </nav>
    )
}