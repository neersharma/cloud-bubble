import React, { forwardRef, useEffect, useState } from 'react'
//import TagCloud from 'react-tag-cloud';
import { TagCloud } from 'react-tagcloud'
import randomColor from 'randomcolor';
import _ from "lodash"

let MyTagCloud = forwardRef(({ tags }, ref) => {
    //const { wordList } = props
    //console.log("Tag cloud rendered again ...", wordList, word)
    // useEffect(() => {
    //     console.log(" R ----------> ", word)
    // }, [word])


    const animation = `blinker2 3s linear infinite`

    const changeWord = (newWord) => {
        //setWord(_ => newWord)
        console.log("changed word ==> ", newWord)
        tags.forEach(({ value: w }) => {
            const el = document.getElementById(`__${w}__`)
            //delete el?.style["animation"]
            el.style["animation"] = ""
        })

        const el = document.getElementById(`__${newWord}__`)
        el.style["animation"] = animation
    }

    if (ref) {
        console.log("REF IS ... ", ref)
        ref.current = { changeWord };
    }

    const customRenderer = (tag, size, color) => (
        <span
            key={tag.value}
            id={`__${tag.value}__`}
            style={{
                //animation: 'blinker2 3s linear infinite',
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${size / 2}rem`,
                //border: `2px solid ${color}`,
                fontFamily: "Open Sans",
                margin: '3px',
                padding: '3px',
                display: 'inline-block',
            }}
            className="text-gray-300"
        >
            {tag.value}
        </span>
    )


    return (

        <div className="inline-block">
            <TagCloud tags={tags} minSize={1} maxSize={5} renderer={customRenderer} />
        </div>

    )
})

export default React.memo(MyTagCloud, ({ wordList: owl }, { wordList: nwl }) => {
    // console.log("R E T U R N I N G --> ", _.isEqual(owl, nwl), _.isEqual(ow, nw))
    return (_.isEqual(owl, nwl))
})
