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

// const wordList = [
//     "TEXT1",
//     "AbcTEXT2",
//     "DefTEXT3",
//     "AbcTEXT4",
//     "DefTEXT5",
//     "AbcTEXT6",
//     "DefTEXT7",
//     "AbcTEXT8",
//     "DefTEXT9",
//     "AbcTEXT10",
// ]

const tags = [
    { value: 'jQuery', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'NPM', count: 11 },
]

const Experiment = () => {
    const [word, setWord] = useState(tags[0].value)
    const tagRef = useRef(null)

    const onBubbled = (w) => {
        const randomIndex = (max) => {
            return Math.floor(Math.random() * max);
        }

        const rest = tags.filter(({ value: x }) => x !== w)
        const tagIdx = randomIndex(rest.length)
        console.log("Finished animation .... starting ...", rest[tagIdx])
        setWord(_ => rest[tagIdx].value)
        tagRef?.current?.changeWord(w)
    }

    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <MyTagCloud ref={tagRef} tags={tags} />
            <BubbleWord word={word} onBubbled={onBubbled} />
        </div >
    )
}

export default Experiment