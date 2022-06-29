import Link from 'next/link';
import Image from 'next/image';
export const Navbar = ({ home }) => {
  const navColor = home ? ' bg-black' : ' bg-slate-800';

  return (
    <>
      <nav className={'fixed top-0 w-screen flex items-center flex-wrap p-3 justify-center space-x-10 z-10' + navColor}>
      <Link href='/home'>
          <a className='inline-flex items-center'>
            <span className='text-white underline hover:text-blue-200'>Home</span>
          </a>
      </Link>
      <Link href='/about'>
          <a className='inline-flex items-center'>
            <span className='text-white underline hover:text-blue-200'>Politics</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src='/logo.svg' alt='logo' width={250} height={40} />
          </a>
        </Link>
        <Link href='/about'>
          <a className='inline-flex items-center'>
            <span className='text-white underline hover:text-blue-200'>Etc</span>
          </a>
        </Link>
        <Link href='/about'>
          <a className='inline-flex items-center'>
            <span className='text-white underline hover:text-blue-200'>About</span>
          </a>
        </Link>
      </nav>
    </>
  );
};