import React, { useState } from 'react'
import Article from '../components/Article_1'
import DragAndDrop from '../components/DragAndDrop'
import Form from '../components/Form'

const ContentCreator = () => {
    const [newData, setNewData] = useState(Article.sampleData)
    const [oldData, setoldData] = useState(null)

    const handleSubmit = (values) => {
        setNewData(_ => {
            return Article.fromForm(values)
        })
    }

    return (
        <div className="">
            <div className="md:hidden">
                Snap. We do not support this device for content creation.
            </div>
            <div className="hidden md:grid md:grid-cols-4 gap-1 h-screen p-2">
                <div className="col-span-1">
                    {/* {Article.sample} */}
                    <Article data={Article.sampleData} />
                </div>

                <div className="col-span-2">
                    <Form structure={Article.Schema} onSubmit={handleSubmit} />
                </div>

                <div className="col-span-1">
                    <div className="flex flex-col justify-center items-center">
                        <Article data={newData || Article.sampleData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCreator
