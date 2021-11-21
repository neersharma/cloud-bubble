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

const BubbleWord = ({ word, onBubbled }) => {
    useEffect(() => {
        const animationStart = (ev) => {
            // No-Op wait.
            setTimeout(() => { }, 1000) //console.log("Waiting ... ", ev.target.innerText) }, 1000)
        }
        const animationEnd = (el, ev, idx) => {
            el.removeEventListener("animationstart", animationStart)
            el.removeEventListener("animationend", animationEnd)

            if (idx === word.length - 1) {
                onBubbled(word)
            } else {
                //el.classList.add("hidden")
            }
        }

        const randomWait = (max) => Math.floor(Math.random() * max);

        [...word].forEach((w, idx) => {
            const L = document.getElementById(`__L__${idx}`);
            setTimeout(() => {
                //console.log("L .... ", L?.innerText)
                L?.classList.add("animate-bubble")
            }, randomWait(word.length) * 100)

            //console.log("Adding event listener")
            L?.addEventListener('animationstart', animationStart);
            L?.addEventListener('animationend', (ev) => animationEnd(L, ev, idx));
        })
    }, [word])

    return (
        <div className="flex justify-around bg-transparent">
            {[...word].map((l, idx) => {
                //console.log(word, "  ", l)
                //return window.setTimeout(() => {
                return (<h2 key={`${word}_${idx}_${l}`} id={`__L__${idx}`} className={`text-xl rounded-full bg-red-900 z-10 text-gray-300 opacity-0 shadow-lg
                w-16 h-16 flex justify-center items-center`}>{l}</h2>)
                //}, 500)

            })}
        </div>
    )
}

export default BubbleWord