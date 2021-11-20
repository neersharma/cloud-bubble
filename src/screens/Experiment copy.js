import React, { useEffect, useRef, useState } from "react"
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

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
    // const [idx, setIdx] = useState(0)
    // const [letter, setLetter] = useState(null)
    // //const [w, setW] = useState({ idx: 0, rest: word })
    // const lRef = useRef()
    const [word, setWord] = useState(wordList[0])

    useEffect(() => {
        console.log("... ", word)
        const randomIndex = (max) => {
            return Math.floor(Math.random() * max);
        }

        const animationStart = (ev) => {
            //console.log(ev.target.innerText)

            // No-Op wait.
            setTimeout(() => { }, 1000) //console.log("Waiting ... ", ev.target.innerText) }, 1000)
        }
        const animationEnd = (el, ev, idx) => {
            el.removeEventListener("animationstart", animationStart)
            el.removeEventListener("animationend", animationEnd)

            if (idx === word.length - 1) {
                // This is the end of one word. Choose a different word now.
                const rest = wordList.filter(x => x !== word)
                const wordIdx = randomIndex(rest.length)
                console.log("Finished animation .... starting ...", wordList[wordIdx])
                setWord(_ => rest[wordIdx])
            } else {
                //el.classList.add("hidden")
            }
        }

        [...word].forEach((w, idx) => {
            const L = document.getElementById(`__L__${idx}`);
            setTimeout(() => {
                //console.log("L .... ", L?.innerText)
                L?.classList.add("animate-bubble")
            }, idx * 100)

            //console.log("Adding event listener")
            L?.addEventListener('animationstart', animationStart);
            L?.addEventListener('animationend', (ev) => animationEnd(L, ev, idx));
        })
    }, [word])

    // The first time...
    // useEffect(() => {
    //     console.log("U S E -->", idx)
    //     if (idx < word.length) {
    //         console.log("IDx is --> ", idx)
    //         const l = word.substring(idx, idx + 1)
    //         console.log("IDx is --> ", idx, l)
    //         setLetter(l)
    //         //setIdx(i => i + 1)
    //     }
    // }, [idx])

    return (
        <div id="experiment" className="relative w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <div className="flex h-full justify-center items-center">
                <div className="w-full h-full bg-transparent">
                    <TagCloud
                        key={1}
                        style={{
                            display: "block",
                            fontFamily: 'opensans',
                            fontSize: 30,
                            fontWeight: 'bold',
                            //color: () => randomColor(),
                            padding: 5,
                            width: '100%',
                            height: '100%'
                        }}>
                        <div style={{ fontSize: 50 }}>react</div>
                        <div style={{ color: 'green' }}>tag</div>
                        <div rotate={90}>cloud</div>
                        <div style={{ fontSize: 50 }}>react2</div>
                        <div style={{ color: 'green' }}>tag2</div>
                        <div rotate={90}>cloud2</div>
                        <div style={{ fontSize: 50 }}>react3</div>
                        <div style={{ color: 'green' }}>tag3</div>
                        <div rotate={90}>cloud3</div>
                    </TagCloud>
                </div>
            </div>

            <div className="absolute left-0 top-0 right-0 flex z-10 justify-around bg-transparent">
                {[...word].map((l, idx) => {
                    console.log(word, "  ", l)
                    //return window.setTimeout(() => {
                    return (<h2 key={`${word}_${idx}_${l}`} id={`__L__${idx}`} className="text-4xl z-10 text-gray-900 mx-3 opacity-0">{l}</h2>)
                    //}, 500)

                })}
            </div>

            {/* <h2 key={idx} id="__L__" className="absolute text-4xl text-gray-900 animate-bubble">{letter}</h2> */}
        </div >
    )
}

export default Experiment