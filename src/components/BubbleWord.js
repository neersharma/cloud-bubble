import React, { useEffect, useRef, useState } from "react"
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

const BubbleWord = ({ wordList }) => {
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

    return (
        <div className="absolute left-0 top-0 right-0 flex z-10 justify-around bg-transparent">
            {[...word].map((l, idx) => {
                console.log(word, "  ", l)
                //return window.setTimeout(() => {
                return (<h2 key={`${word}_${idx}_${l}`} id={`__L__${idx}`} className="text-4xl z-10 text-gray-900 mx-3 opacity-0">{l}</h2>)
                //}, 500)

            })}
        </div>
    )
}

export default BubbleWord