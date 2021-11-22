import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addFilesToList, setDropDepth, setInDropZone } from '../features/dragSlice'

const DragAndDrop = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.drag.data)
    const { dropDepth, inDropZone, fileList } = data

    const handleDragEnter = e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(setDropDepth({ dropDepth: dropDepth + 1 }))
    }

    const handleDragLeave = e => {
        e.preventDefault()
        e.stopPropagation()

        const newDropDepth = dropDepth - 1
        dispatch(setDropDepth({ dropDepth: newDropDepth }))
        if (newDropDepth < 1) {
            dispatch(setInDropZone(false))
        }
    }

    const handleDragOver = e => {
        e.preventDefault()
        e.stopPropagation()
        e.dataTransfer.dropEffect = 'copy'
        dispatch(setInDropZone(true))
    }

    const handleDrop = e => {
        e.preventDefault()
        e.stopPropagation()

        console.log("D R O P P I N G ...", e.dataTransfer.getData("text/html"))
        console.log("D R O P P I N G --- 2 ...", e.dataTransfer.getData("URL"), e.dataTransfer.types)

        let files = [...e.dataTransfer.files]

        if (files && files.length > 0) {
            const existingFiles = fileList.map(f => f.name)
            files = files.filter(f => !existingFiles.includes(f.name))
            dispatch(addFilesToList({ files: files }))
            e.dataTransfer.clearData()
            dispatch(setDropDepth({ dropDepth: 0 }))
            dispatch(setInDropZone({ inDropZone: false }))
        }
    }

    return (
        <div
            className={`p-8 text-center bg-blue-400 border rounded-lg opacity-2 box-shadow-sm ${inDropZone && "opacity-70"}`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
            <ol>
                {fileList?.map((f, idx) => {
                    return <li key={idx}>{f.name}</li>
                })}
            </ol>
        </div>
    )
}

export default DragAndDrop

