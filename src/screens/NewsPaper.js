import React from "react"
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

const Home = () => {
    return (
        <div id="home" className="w-full min-w-full h-screen min-h-screen 
        px-2
        text-gray-800">
            <section id="ticker" className="mt-2 mb-3 inline-flex w-full justify-center items-center text-yellow-500">
                <div className="px-3 border-r-2 border-gray-200">
                    <span className="text-red-500">
                        PODCAST:
                    </span>
                    <span className="">
                        Tug of war
                    </span>
                </div>
                <div className="px-3">
                    <span className="text-red-500">
                        TRENDING:
                    </span>
                    <span className="">
                        Elon Musk
                    </span>
                    <span className="">
                        Meeting today
                    </span>
                </div>
            </section>
            <section className="h-3/4 min-h-[30rem]">
                {/* <section data-id="highlights" className="h-full min-h-screen"> */}
                <div className="h-full min-h-full 
                grid grid-cols-1 gap-1 md:grid-cols-7 md:gap-3">
                    <div data-id="events" className="col-span-3 md:overflow-y-scroll y_scroll">
                        <h2 className="text-3xl font-bold">Wow - this is eye catching</h2>
                        <div className="block w-full h-auto">
                            <img className="object-fill object-left-top" src="https://picsum.photos/1600/900" alt="" />
                        </div>
                        <h3 className="text-lg font-semibold">Biggest Event - now you are going to like this event like no other</h3>
                        <div data-id="summary"
                            className="h-full">
                            <ul>
                                <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Cloud is the future</li>
                                <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Blockchain is the present</li>
                                <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Blockchain has made many rich</li>
                            </ul>
                        </div>
                    </div>
                    <div data-id="following" className="col-span-2 md:overflow-y-scroll y_scroll">
                        <div className="flex flex-col">
                            <div className="block w-full h-auto">
                                <img className="object-fill object-left-top" src="https://picsum.photos/1600/900" alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Biggest Event - now you are going to like this event like no other</h3>
                            <div data-id="summary"
                                className="h-full">
                                <ul>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                </ul>
                            </div>

                            <div className="block w-full h-auto">
                                <img className="object-fill object-left-top" src="https://picsum.photos/1200/700" alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Biggest Event - now you are going to like this event like no other</h3>
                            <div data-id="summary"
                                className="h-full">
                                <ul>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div data-id="opinions" className="col-span-2 md:overflow-y-scroll y_scroll">
                        <div className="flex flex-col">
                            <div className="block w-full h-auto">
                                <img className="object-fill object-left-top" src="https://picsum.photos/1200/800" alt="" />
                            </div>
                            <h3 className="text-lg font-semibold">Biggest Event - now you are going to like this event like no other</h3>
                            <div data-id="summary"
                                className="h-full">
                                <ul>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light"><span className="font-semibold">Analysis:</span><span>Some analysis</span></li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light"><span className="font-semibold">Opinion:</span><span>Some opinion</span></li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following NFT</li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Tesla</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-id="more" className="">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-7 md:gap-3">
                    <div data-id="news" className="col-span-2 md:overflow-y-scroll y_scroll bg-gray-300">
                        News And Buzz
                    </div>
                    <div data-id="featured" className="col-span-3 md:overflow-y-scroll y_scroll bg-gray-300">
                        <div className="flex flex-col">
                            Featured
                        </div>
                    </div>
                    <div data-id="opinions" className="col-span-2 md:overflow-y-scroll y_scroll bg-gray-300">
                        <div className="flex flex-col">
                            Spotlight
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Home
