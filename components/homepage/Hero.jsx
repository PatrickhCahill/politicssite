import Link from 'next/link';
import Image from 'next/image';
import styles  from '../../styles/Hero.module.css';
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
        <a href="#" className='w-full h-full sm:-pt-50 md:w-3/5 md:h-3/5' >
        <svg id={styles.heroSVG} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="MainLayer">
            <path id={styles.Green} d="M27.5819 52.154C24.8505 49.7792 25.4689 45.3792 28.749 43.8493L58.8138 29.827C62.4085 28.1504 66.4307 31.1264 65.8786 35.0542L60.8489 70.8427C60.2969 74.7705 55.6103 76.5225 52.617 73.9201L27.5819 52.154Z"/>
            <path id={styles.Liberal} d="M70.5968 44.9451C73.7924 46.6445 74.1796 51.0709 71.3277 53.2995L45.1878 73.7255C42.0624 76.1677 37.4739 74.1728 37.1282 70.2215L33.9783 34.2189C33.6326 30.2675 37.805 27.5061 41.307 29.3685L70.5968 44.9451Z"/>
            <path id={styles.Labor} d="M45.3069 29.4558C47.2783 26.4204 51.7217 26.4204 53.6931 29.4557L71.7632 57.2765C73.9238 60.6028 71.5365 65 67.5701 65H31.4299C27.4635 65 25.0762 60.6028 27.2368 57.2765L45.3069 29.4558Z"/>
          </g>
        </svg>
        </a>




      </div>
    </section>

  )
}