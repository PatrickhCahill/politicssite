import Link from 'next/link';
import Image from 'next/image';
export const CallToAction = () => {
    return (      
    <section id="callToAction" className='bg-brightRed'>
    <div className="mt-16 container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
      <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Subscribe to our newsletter
      </h2>
      <div className="">
      <a href="#" className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-300 md:block">Subscribe</a>
      </div>
    </div>
  </section>
    )
}