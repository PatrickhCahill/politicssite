export const Frame = ({className, children, snap}) => {
    if(snap !== true || snap !== false){
        snap="continue"; //Snap property will be passed to the Article component.
    }
    let actualClassName = className;
    if(!className.includes("h-screen")){ actualClassName += " h-screen"; }

    return (<section className={actualClassName}>{children}</section>)
}

Frame.defaultProps = {
    snap: "continue"
}