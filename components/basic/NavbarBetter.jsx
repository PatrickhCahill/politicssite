import Link from 'next/link';
import Image from 'next/image';
import { NavbarLink } from '../components/NavbarLink';
import { NavbarBurgerLink } from '../components/NavbarBurgerLink';

export const NavbarBetter = ({ home }) => {
    const navColor = home ? ' bg-black' : ' bg-slate-800';

    return (
        <>
            <nav className={"navbar fixed z-10" + navColor}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavbarBurgerLink href='/home' tag='Home' /></li>
                            <li><a>About</a></li>
                            <li><a>Us</a></li>
                            <li><a>Etc</a></li>
                            <li><a>Politcs</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><NavbarLink href='/home' tag='Home' /></li>
                            <li tabIndex="0">
                                <div>
                                    <NavbarLink href='/about' tag='About' />
                                    <svg className=" fill-white hover:fill-blue-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </div>
                                <ul className="p-2">
                                    <li><NavbarLink href='/about' tag='Us' /></li>
                                    <li><NavbarLink href='/etc' tag='Etc' /></li>
                                </ul>
                            </li>
                            <li><NavbarLink href='/politics' tag='Politics' /></li>
                        </ul>
                    </div>
                </div>

                <div className="mavbar-center">
                    <Link href='/'>
                        <a className='btn btn-ghost normal-case text-xl'>
                            <Image src='/logo.svg' alt='logo' width={250} height={40} />
                        </a>
                    </Link>
                </div>

                <div className="navbar-end">
                    <button><a className="btn">Subscribe</a></button>
                </div>
            </nav>
        </>
    );
};