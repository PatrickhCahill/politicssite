import Image from 'next/image'
import Link from 'next/link';

export const Hero = () => {
    return (
        <section>
            <div className='justify-center flex text pt-10'>
                <div className="relative rounded-lg shadow-lg">
                    <Image src='/homepage.svg' alt='logo' width={600} height={600} />
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h1 className='text-9xl text-left text-white font-bold'>
                            AUSTRALIAN
                        </h1>
                        <h1 className='text-9xl text-left text-white font-thin'>
                            Politics
                        </h1>
                        <h1 className='text-9xl text-left text-white font-thin'>
                            Site.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-end max-w-6xl">
            <Link href='/home'>
                <div className="justify-end align-bottom -mt-8 inline-flex opacity-80 hover:opacity-100 cursor-pointer">
                    <Image className='' src='/enter.png' alt='enterSymbol' width={30} height={30} />
                    <p className='text-purple-400 text-right font-thin font-sans text-2xl
                            underline'>Click here for the latest issue</p>
                </div>
            </Link>
            </div>
        </section>
    )
}