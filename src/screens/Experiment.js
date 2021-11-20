import React, { useEffect, useRef, useState } from "react"
import TagCloud from "../components/MyTagCloud";
import randomColor from 'randomcolor';
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
    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <TagCloud wordList={wordList}></TagCloud>
            <BubbleWord wordList={wordList} />
        </div >
    )
}

export default Experiment