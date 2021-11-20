import React, { useEffect, useRef, useState } from "react"
import MyTagCloud from "../components/MyTagCloud";
import BubbleWord from "../components/BubbleWord";

// Following
// Interests
// Achievements
// Publishings
// Events
// Opinions
// News and Buzz
// Funny
// Got my attention
// Featured
// Spotlight

const wordList = [
    "TEXT1",
    "AbcTEXT2",
    "DefTEXT3",
    "AbcTEXT4",
    "DefTEXT5",
    "AbcTEXT6",
    "DefTEXT7",
    "AbcTEXT8",
    "DefTEXT9",
    "AbcTEXT10",
]

const Experiment = () => {
    const [word, setWord] = useState(wordList[0])

    const onBubbled = (w) => {
        const randomIndex = (max) => {
            return Math.floor(Math.random() * max);
        }

        const rest = wordList.filter(x => x !== w)
        const wordIdx = randomIndex(rest.length)
        console.log("Finished animation .... starting ...", wordList[wordIdx])
        setWord(_ => rest[wordIdx])
    }

    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <MyTagCloud key={"do-not-change"} wordList={wordList} />
            <BubbleWord word={word} onBubbled={onBubbled} />
        </div >
    )
}

export default Experiment