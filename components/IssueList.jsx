
const IssueTitle = () => {
    return (
        <div className=" max-w-xs font-extrabold bg-red-400 text-white text-center text-xl">Issue List</div>
    )
}

const Issue = () => {
    return(
        <div className="grid gap-y-4 ">
        <div className="bg-red-400 text-white text-center text-xl">Issue 3</div>
        <div className="text-center text-xl">Australia is the new Canada?</div>
        <div className="text-center text-xl">John Smith</div>
        <div className=" text-center text-xl">June 2022</div>
        </div> 
    )
}
export const IssueList = () => {
    return (
        <section className='pt-10'>
            <IssueTitle />
            <div className="grid place-items-center">
                <div className="pt-4 grid gap-y-4 gap-x-10">
                    <Issue/>

                    <div className="bg-red-400 text-white text-center text-xl">Issue 2</div>
                    <div className="text-center text-xl">Australia is the new Canada?</div>
                    <div className="text-center text-xl">John Smith</div>
                    <div className=" text-center text-xl">June 2022</div>

                    <div className="bg-red-400 text-white text-center text-xl">Issue 1</div>
                    <div className="text-center text-xl">Australia is the new Canada?</div>
                    <div className="text-center text-xl">John Smith</div>
                    <div className=" text-center text-xl">June 2022</div>
                </div>
            </div>

        </section>
    );
}