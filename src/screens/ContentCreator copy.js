import React from 'react'
import Article from '../components/Article_1'
import DragAndDrop from '../components/DragAndDrop'

const ContentCreator = () => {
    return (
        <div className="">
            <div className="md:hidden">
                Snap. We do not support this device for content creation.
            </div>
            <div className="hidden md:grid md:grid-cols-4 gap-1 h-screen p-2">
                <div className="col-span-1">
                    <Article
                        title={{ text: "Title Text Title Text Title TextTitle Text" }}
                        img={{ src: "" }}
                        summary={{ text: "Sumary Text, Summarized to do something" }}
                        link={{}} />
                </div>

                <div className="col-span-2 bg-red-900 flex flex-col justify-center items-center ">
                    2
                </div>

                <div className="col-span-1">
                    <div className="flex flex-col justify-center items-center">3</div>
                </div>
            </div>
        </div>
    )
}

export default ContentCreator
