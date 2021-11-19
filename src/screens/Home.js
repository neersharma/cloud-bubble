import React from "react"

const Home2 = () => {
    return (
        <div id="home" className="w-full h-screen">
            <div className="h-full flex justify-center items-center">
                <div className="w-[300px] h-[300px] bg-white border border-red-600">
                    <div className="h-full flex flex-col">
                        <div id="img" className="h-2/3 flex justify-center items-center">
                            <img className="flex-shrink-0 flex-grow-0 h-auto
                                overflow-hidden object-cover
                                 max-w-full max-h-full" src="https://picsum.photos/900/1200" alt="" />
                        </div>
                        <div id="summary" className="h-1/3 flex justify-center items-center">
                            S U M M A R Y
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home3 = () => {
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
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                    <li className="border-b border-gray-300 my-2 py-2 text-md font-light">Following Satya Nadella</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <div className="h-full flex justify-center items-center">
                <div className="w-[300px] h-[300px] bg-white border border-red-600">
                    <div data-id="events" className="h-full flex flex-col bg-red-500">
                        <div id="img" className="h-2/3 flex justify-center items-center bg-yellow-300">
                            <img className="flex-shrink-1 flex-grow-0 h-auto
                                overflow-hidden object-down
                                 max-w-full max-h-full" src="https://picsum.photos/900/1200" alt="" />
                        </div>
                        <div id="summary" className="h-1/3">
                            S U M M A R Y
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    )
}

const Home = () => {
    return (
        <div id="home" className="min-h-full min-w-full h-screen bg-gray-50">
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
            <section className="w-full h-3/4 overflow-y-hidden">
                <div className="h-full w-full grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2
                bg-red-300">
                    {/* <div data-id="events"
                        className="flex flex-col p-2 bg-gray-300">
                        <div className="w-1/3">
                            <img className="flex-shrink-1 flex-grow-0 h-auto
                                overflow-hidden object-cover
                                 max-w-full max-h-full" src="https://picsum.photos/900/1200" alt="" />
                        </div>
                        <div className="flex-shrink-0">Summary</div>
                    </div> */}
                    <div data-id="events" className="h-full flex flex-col bg-red-500">
                        <div id="img" className="h-2/3 flex justify-center items-center bg-yellow-300">
                            <img className="flex-shrink-1 flex-grow-0 h-auto
                                overflow-hidden object-down
                                 max-w-full max-h-full" src="https://picsum.photos/900/1200" alt="" />
                        </div>
                        <div id="summary" className="h-1/3">
                            S U M M A R Y
                        </div>
                    </div>
                    <div data-id="following" className="flex flex-col items-center justify-center p-2 bg-gray-100">2</div>
                    <div data-id="opinions" className="flex justify-center p-2 bg-gray-100">3</div>
                </div>
            </section>
        </div>
    )
}

export default Home3
