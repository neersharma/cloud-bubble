import React from 'react'

const Article = ({ title, img, summary, link }) => {
    return (
        <div className="">
            <div data-id="title" className="">
                <a href={title.link || link}>
                    <h1 className="text-3xl font-semibold">{title.text}</h1>
                </a>
            </div>
            <div data-id="photo" className="block overflow-hidden w-full h-auto">
                <div className="block w-full h-auto">
                    <img className="object-fill object-left-top" src={img?.src || "https://picsum.photos/1600/900"} alt={img.alt} />
                </div>
            </div>
            <div data-id="summary" className="">
                <a href={summary.link || link}>
                    <h3 className="text-lg font-semibold">{summary.text}</h3></a>
            </div>
        </div>
    )
}

export default Article