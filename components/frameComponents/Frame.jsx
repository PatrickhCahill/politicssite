export const Frame = ({className, children, snap}) => {
    // Makes sure all frames have a snap property. If unassigned it's will be given the default value of "continue".
    // Frame.defaultProps = {
    //     snap: "continue"
    // } This is used below to ensure default value.

    // Now we check that assigned values are valid. A valid value is either "startSnap" or "lastSnap" or "continue."
    // Check if valid
    if (snap !== "startSnap" && snap !== "lastSnap" && snap !== "continue") {
        // console.warn
        console.warn(`${snap} is not a valid snap value. Please use "startSnap", "lastSnap" or "continue".`);
        snap="continue"; //Snap property will be passed to the Article component.
    }

    // Checks that className includes h-screen, if not then it adds it.
    let actualClassName = className;
    if(!className.includes("h-screen")){ actualClassName += " h-screen"; }

    return (<section className={actualClassName}>{children}</section>)
}

Frame.defaultProps = {
    snap: "continue"
}