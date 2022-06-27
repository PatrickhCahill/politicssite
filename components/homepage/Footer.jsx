import Link from 'next/link';
import Image from 'next/image';
export const Footer = () => {
    return (      <footer className="bg-veryDarkBlue">
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
        <div className="h-8">
        <Image src='/logo.svg' alt='FooterLogo' width={300} height={40}/>
        </div>
        <div className="mx-auto my-6 text-center text-white">
          Copyright &copy; All rights reserved.
        </div>
      </div>

      <div className="flex justify-around space-x-32">
        <div className='flex flex-col space-y-3 text-white'>
          <a href="#" className="hover:text-brightRed">About</a>
          <a href="#" className="hover:text-brightRed">More</a>
          <a href="#" className="hover:text-brightRed">Another</a>
          <a href="#" className="hover:text-brightRed">Home</a>
        </div>
        <div className='flex flex-col space-y-3 text-white'>
          <a href="#" className="hover:text-brightRed">Politics</a>
          <a href="#" className="hover:text-brightRed">Philosophy</a>
          <a href="#" className="hover:text-brightRed">About this</a>
        </div>
      </div>


    </div>
  </footer>
    )
}