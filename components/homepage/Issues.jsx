import Link from 'next/link';
import Image from 'next/image';
export const Issues = () => {
    return (
        <section id="issues">
            <div className="container flex flex-col items-center px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row lg:max-w-5xl">
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What&apos;s different about this site?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        This is a site that delivers to use the philosophical take on Australian politics without the wankery.
                    </p>
                </div>

                <div className='flex flex-col space-y-8 md:w-1/2'>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Is Australia the new Canada?
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Is Australia the new Canada?
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Disecting the election results with an eye to the future. Questions abound about centrist politics, whether Labor can win elections by default, and why Albanese will govern as well/poorly as Justin Trudeau.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                <h3 className="text-base font-bold md:mb-4 md:hidden">
                                    Is Australia the new Canada?
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                                Is Australia the new Canada?
                            </h3>
                            <p className="text-darkGrayishBlue">
                                Disecting the election results with an eye to the future. Questions abound about centrist politics, whether Labor can win elections by default, and why Albanese will govern as well/poorly as Justin Trudeau.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}