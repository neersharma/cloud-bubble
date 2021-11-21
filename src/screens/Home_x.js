import React from 'react'
import Experiment from './Experiment'

const Home_x = () => {
    return (
        <div className="relative h-screen min-h-full">
            <div className="bg-yellow-500 h-full">
                <div className="flex flex-col justify-center items-center bg-red-400 h-full">
                    Some content
                </div>
            </div>
            <div className="absolute inset-0 bg-gray-900 text-white">
                <Experiment />
            </div>
        </div>
    )
}

export default Home_x
