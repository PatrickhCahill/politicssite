import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Frame } from "./Frame";
export const Article = ({ title, children }) => {
    // Handling <Head> Stuff
    if (!title) {
        console.warn("No Title Provided => Please Provide One using <Article title='Title'>...<Article/>");
        title = "Article";
    }
    // Initializing:
    let wrapperClassNames = "overflow-y-scroll h-screen";


    // Handling <Frame> Stuff
    let frames = ParseFrames(children);
    const [doesSnap, snaps] = GetSnaps(frames);
    if (doesSnap) {
        frames = implementSnaps(frames, snaps);
        wrapperClassNames += " snap-y snap-mandatory";
    }
    const [scrollPosition, setScrollPosition] = useState(0); //Hook will track the scrollPosition so that we can toggle scrollsnapping between the frames.
    const [snap, setSnap] = useState(true);

    const snapFrameCount = 4; //This is the count of the number of snapFrames (needs to be dynamic)
    const handleScroll = () => {
        const main = document.getElementById('wrapper'); //Find the more react way of doing this.

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
        const main = document.getElementById('wrapper'); //Find the more react way of doing this.
        main.addEventListener("scroll", handleScroll);
        return () => {
            main.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);


    // Handling Return() Stuff
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="overflow-hidden relative">
                <div id="wrapper" className={wrapperClassNames}>
                    <AddStyle className='text-9xl'>{frames}</AddStyle>
                </div>
            </div>

        </>
    );
}

// This function will return the component.props.snap property of each of the frame components
const GetSnaps = (frames) => {
    let doesSnap = false;
    const snapsProperties = frames.map(frame => frame.props.snap);
    let snaps = [];
    for (let i = 0; i < snapsProperties.length; i++) {
        if (snapsProperties[i] === true) {
            snaps.push(true);
        }
        else if (snapsProperties[i] === false) {
            snaps.push(false);
        }
        else if (snapsProperties[i] === "continue") {
            if (snaps[i - 1] === true) {
                snaps.push(true);
            } else { snaps.push(false) };
        }
    }
    for (let i = 1; i < snaps.length; i++) {
        if (snaps[i - 1] === true && snaps[i] === true) {
            doesSnap = true;
            break;
        }
    }

    return [doesSnap, snaps];
}
// This function will implement the snap classes
const implementSnaps = (frames, snaps) => {
    const snapClass = "snap-start";
    let newFrames = [];
    for (let i = 0; i < frames.length; i++) {
        if (snaps[i] === true) {

            newFrames.push(<Frame snap={true} className={`${frames[i].props.className} ${snapClass}`}>{frames[i].props.children}</Frame>);
        } else {
            newFrames.push(<Frame snap={false} className={frames[i].props.className}>{frames[i].props.children}</Frame>);
        }
    }
    return newFrames;
}




// This function is used to apply a class to all of the children element.
const AddStyle = ({ className, children }) => {
    const StyledChildren = () =>
        React.Children.map(children, child =>
            React.cloneElement(child, {
                className: `${child.props.className} ${className}`
            })
        );

    return <StyledChildren />;
};

// This function is used to ensure all of the elements that are displayed are individual frames
const ParseFrames = (content) => {
    if (!Array.isArray(content)) {
        content = [content];
    }
    const Frames = content.map(child => {
        if (child.type.name === "Frame") {
            return child;
        }
        else if (child.type.name !== "undefined") {
            try {
                console.warn(`${child.type.name} is not a Frame => Please use <Frame>...<Frame/>`);
                return <Frame>{child}</Frame>;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            try {
                console.warn(`${child.type} is not a Frame => Please use <Frame>...<Frame/>`);
                return <Frame>{child}</Frame>;
            } catch (error) {
                console.error(error);
            }

        }
    }
    );
    return Frames.filter(element => element !== undefined);
}