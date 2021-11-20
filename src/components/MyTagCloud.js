import React from 'react'
import TagCloud from 'react-tag-cloud';

const MyTagCloud = ({ wordList }) => {
    return (
        <div className="flex h-full justify-center items-center">
            <div className="w-full h-full bg-transparent">
                <TagCloud
                    key={1}
                    style={{
                        display: "block",
                        fontFamily: 'opensans',
                        // fontSize: 30,
                        // fontWeight: 'bold',
                        //color: () => randomColor(),
                        padding: 5,
                        width: '100%',
                        height: '100%'
                    }}>
                    {wordList.map(word => {
                        console.log("Tag cloud rendered again ...")
                        return (
                            <div style={{ fontSize: 20 }}>{word}</div>
                        )
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
}

export default React.memo(MyTagCloud)
