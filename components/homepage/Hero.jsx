import Link from 'next/link';
import Image from 'next/image';
export const Hero = () => {
    return (
        <section id="hero">
        <div className="containert flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 lg:max-w-5xl">
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              An Australian Politics Site
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"> Latest Issue </a>
            </div>
          </div>

          <div>
            <Image src='/homepageActual.svg' alt='homepageLogo' width={300} height={300} />
          </div>
        </div>
      </section>

    )
}