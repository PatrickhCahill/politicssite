import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { Frame } from "./Frame";
export const Article = ({ title, children }) => {
    // Handling <Head> Stuff
    if (!title) {
        console.warn("No Title Provided => Please Provide One using <Article title='Title'>...<Article/>");
        title = "Article";
    }


    // Handling the frames. THESE FUNCTIONS SHOULD BE STATIC
    const frames = ParseFrames(children);
    const { newFrames, snapRegions } = handleFrames(frames);

    // HANDLING THE DYNAMICS
    let wrapper = useRef(null);
    const [isSnapping, setIsSnapping] = useState(true);

    useEffect(() => {
        const theWrapper = wrapper.current;
        const onScroll = () => {
            const location = theWrapper.scrollTop / window.innerHeight;
            console.log(location);
            for(let region = 0; region < snapRegions.length; region++) {
                if(location >= snapRegions[region][0] && location <= snapRegions[region][1]){
                    setIsSnapping(true);
                    break;
                } else {
                    setIsSnapping(false);
                }
            }
        };
        theWrapper.addEventListener("scroll", onScroll);
        return () => {
            theWrapper.removeEventListener("scroll", onScroll);
        }
    }, [snapRegions]);





    // Handling Return() Stuff
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="overflow-hidden relative">
                <div id="wrapper" ref={wrapper}  className={"overflow-y-scroll h-screen " + (isSnapping ? " snap-y snap-mandatory " : " ")}>
                    <AddStyle className='text-9xl'>{newFrames}</AddStyle>
                </div>
            </div>

        </>
    );
}
// // GENERAL TOOLS

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


// // INITIALISING TOOLS
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

// This function is does all of the initial processing of the frames.
const handleFrames = (frames) => {
    const frameProps = frames.map(frame => frame.props);

    // Handling the snapping effect of the frames
    const snapProps = frames.map(frame => frame.props.snap);
    const snapRegions = [];
    let snapRegion = [];
    for(let i=0; i<snapProps.length; i++){
        if(snapProps[i]==="startSnap"){
            snapRegion.push(i);
        } else if(snapProps[i]==="lastSnap"){
            snapRegion.push(i);
            snapRegions.push(snapRegion);
            snapRegion = [];
        }
    };

    const snapList = getSnapList(frameProps);
    const newFrames = handleSnapList(frames, snapList);

    return { newFrames: newFrames, snapRegions: snapRegions };
};

// SNAP PROPERTY
// This function is used to get the snap properties of each frame
const getSnapList = (frameProps) => {
    const snapValues = frameProps.map(frame => frame.snap);
    // Checks that there is at least one instance of "startSnap" followed by "continue"

    let isSnapping = false;
    const snapList = [];
    for (let i = 0; i < snapValues.length; i++) {
        if (snapValues[i] === "startSnap") {
            isSnapping = true;
            snapList.push(true);
        }
        else if (snapValues[i] === "continue" && isSnapping) {
            snapList.push(true);
        }
        else if (snapValues[i] === "continue" && !isSnapping) {
            snapList.push(false);
        }
        else if (snapValues[i] === "lastSnap") {
            isSnapping = false;
            snapList.push(true);
        }
        else {
            console.warn(`${snapValues[i]} is not a valid snap value. Please use "startSnap" or "continue".`);
        }
    }
    return snapList;
};

// This function is used to apply the snap-start className to each frame
const handleSnapList = (frames, snapList) => {
    const newFrames = frames.map((frame, index) => {
        if (snapList[index]) {
            return <AddStyle className='snap-start' key={index}>{frame}</AddStyle>;
        } else {
            return frame
        }
    }
    );
    return newFrames;
};

