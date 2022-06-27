import Link from 'next/link';
import Image from 'next/image';
export const Authors = () => {
    return (
<section id="authors">
<div className="max-w-6-xl px-5 mx-auto mt-32 text-center">
  <h2 className="text-4xl font-bold text-center">
    Meet The Author
  </h2>

  <div className="flex flex-col mt-24 md:flex-row md:space-x-6 items-center justify-center">
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
    <div className="-mt-16">
      <Image src='/icon.svg' alt='Profile' width={100} height={100}/>
    </div>
    <h5 className="text-lg font-bold">Patrick Cahill</h5>
    <p className="text-sm text-darkGrayishBlue">Student in Mathematics and Philsophy at University of Sydney.</p>
    </div>
  </div>
</div>
</section>
    )
}