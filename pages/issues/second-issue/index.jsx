import { Article } from "../../../components/frameComponents/Article"
import { Frame } from "../../../components/frameComponents/Frame"

export default function Home() {
    return (
        <>
            <Article title="Second-Issue">
                <Frame snap="startSnap" className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>First issue</h1>
                </Frame>
                <Frame className="bg-politicalTeal h-screen flex items-center justify-center ">
                    <h1 className='font-bold'>Second issue</h1>
                </Frame>
                <Frame className="bg-politicalPurple h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Third issue</h1>
                </Frame>
                <Frame snap="lastSnap" className="bg-politicalYellow  h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Fourth issue</h1>
                </Frame>
                <Frame className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Fifth issue</h1>
                </Frame>
                <Frame className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Sixth issue</h1>
                </Frame>

                <Frame snap="startSnap" className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Seventh issue</h1>
                </Frame>
                <Frame className="bg-politicalTeal h-screen flex items-center justify-center ">
                    <h1 className='font-bold'>Eigth issue</h1>
                </Frame>
                <Frame className="bg-politicalPurple h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Third issue</h1>
                </Frame>
                <Frame snap="lastSnap" className="bg-politicalYellow  h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Fourth issue</h1>
                </Frame>
                <Frame className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Fifth issue</h1>
                </Frame>
                <Frame className="bg-politicalRed h-screen flex items-center justify-center">
                    <h1 className='font-bold'>Sixth issue</h1>
                </Frame>
            </Article>
        </>
    )
}
