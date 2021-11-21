import React, { forwardRef, useEffect, useState } from 'react'
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import _ from "lodash"

let MyTagCloud = forwardRef(({ wordList }, ref) => {
    //const { wordList } = props
    //console.log("Tag cloud rendered again ...", wordList, word)
    // useEffect(() => {
    //     console.log(" R ----------> ", word)
    // }, [word])


    const changeWord = (newWord) => {
        //setWord(_ => newWord)
        wordList.forEach(w => {
            const existing = document.getElementById(`__${w}__`)
            existing?.classList.remove(...["transition", "duration-500", "ease-in-out", "animate-pulse", "text-red-500"])
        })

        const el = document.getElementById(`__${newWord}__`)
        el?.classList.add(...["transition", "duration-500", "ease-in-out", "animate-pulse", "text-red-500"])
    }

    if (ref) {
        console.log("REF IS ... ", ref)
        ref.current = { changeWord };
    }

    return (
        <div className="flex h-full justify-center items-center">
            <div className="w-full h-full bg-transparent">
                <TagCloud
                    className="font-opensans"
                    style={{
                        display: "block",
                        //fontFamily: 'font-opensans',
                        fontSize: 30,
                        fontWeight: 'bold',
                        //color: () => randomColor(),
                        padding: 5,
                        width: '100%',
                        height: '100%'
                    }}>
                    {wordList.map(w => {
                        return <div key={w} id={`__${w}__`} className="_word text-lg font-semibold">{w}</div>
                    })}

                    {/* <div style={{ fontSize: 50 }}>react</div>
                    <div style={{ color: 'green' }}>tag</div>
                    <div rotate={90}>cloud</div>
                    <div style={{ fontSize: 50 }}>react2</div>
                    <div style={{ color: 'green' }}>tag2</div>
                    <div rotate={90}>cloud2</div>
                    <div style={{ fontSize: 50 }}>react3</div>
                    <div style={{ color: 'green' }}>tag3</div>
                    <div rotate={90}>cloud3</div> */}
                </TagCloud>
            </div>
        </div>
    )
})

export default React.memo(MyTagCloud, ({ wordList: owl }, { wordList: nwl }) => {
    // console.log("R E T U R N I N G --> ", _.isEqual(owl, nwl), _.isEqual(ow, nw))
    return (_.isEqual(owl, nwl))
})
