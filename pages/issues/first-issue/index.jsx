import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0); //Hook will track the scrollPosition so that we can toggle scrollsnapping between the frames.
    const [snap, setSnap] = useState(true);

    const snapFrameCount = 4; //This is the count of the number of snapFrames (needs to be dynamic)
    const handleScroll = () => {
        const main = document.getElementById('main'); //Find the more react way of doing this.

        console.log("Scrolling Detected");
        const prev = scrollPosition;
        const position = main.scrollTop/window.innerHeight; //Gives value in units of viewport height.
        
        setScrollPosition(position);
        if(position >= (snapFrameCount-1) && prev < position){ //Checks that the scroll position on the final snapFrame. Next want to check
            console.log("On final snapFrame")
            setSnap(false);
        } else if(position < (snapFrameCount-0.9) && prev > position){ //Checks that the scroll position on the final snapFrame. Next want to check
            console.log("On final snapFrame")
            setSnap(true);
        }
    };

    useEffect(() => {
        const main = document.getElementById('main'); //Find the more react way of doing this.
        main.addEventListener("scroll", handleScroll);
        return () => {
            main.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);
    return (
        <>
            <Head>
                <title>Australia is the new Canada?</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icon.svg" />
            </Head>
            <div className=" overflow-hidden relative">
                <div id="main" className={(snap ? "snap-y snap-mandatory ": " ")+" overflow-y-scroll h-screen"}>
                    <section className="bg-politicalRed h-screen flex items-center justify-center snap-start"><h1 className=' font-bold'>First Page</h1></section>
                    <section className="bg-politicalYellow h-screen flex items-center justify-center snap-start"><h1 className=' font-bold'>Second Page</h1></section>
                    <section className="bg-politicalTeal h-screen flex items-center justify-center snap-start"><h1 className=' font-bold'>Third Page</h1></section>
                    <section className="bg-politicalOrange h-screen flex items-center justify-center snap-start"><h1 className=' font-bold'>Fourth Page</h1></section>
                    <section className="bg-politicalRed h-screen flex items-center justify-center"><h1 className=' font-bold'>First Page</h1></section>
                    <section className="bg-politicalYellow h-screen flex items-center justify-center "><h1 className=' font-bold'>Second Page</h1></section>
                    <section className="bg-politicalTeal h-screen flex items-center justify-center "><h1 className=' font-bold'>Third Page</h1></section>
                    <section className="bg-politicalOrange h-screen flex items-center justify-center "><h1 className=' font-bold'>Fourth Page</h1></section>

                </div>

            </div>
        </>
    )
}
