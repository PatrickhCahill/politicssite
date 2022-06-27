import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Hero.module.css';
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
        <a href="https:/facebook.com" className='sm:-pt-50 md:w-3/5 md:h-3/5' >
          <svg className="h-full w-full" id={styles.heroSVG}viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id={styles.Liberal} d="M4.68049 48.4997C1.74975 46.168 2.46465 41.513 5.98419 40.0108L74.8142 10.6335C78.4216 9.09383 82.2509 12.0068 81.6618 15.8424L70.1468 90.8207C69.5577 94.6563 64.9993 96.4905 61.9955 94.1006L4.68049 48.4997Z"/>
              <path id={styles.Green} d="M94.5139 42.1263C97.945 43.7961 98.3938 48.4908 95.3317 50.6804L35.4882 93.4732C32.3547 95.7139 27.9153 93.6602 27.5461 89.7993L20.3351 14.3734C19.966 10.5125 23.9483 7.78455 27.4593 9.49325L94.5139 42.1263Z"/>
              <path id={styles.Labor} d="M45.9226 8.11479C47.9157 5.30678 52.0843 5.30678 54.0773 8.1148L95.1065 65.9209C97.4564 69.2317 95.0891 73.8149 91.0291 73.8149H8.97082C4.91081 73.8149 2.54355 69.2317 4.89348 65.9209L45.9226 8.11479Z"/>
          </svg>

        </a>




      </div>
    </section>

  )
}