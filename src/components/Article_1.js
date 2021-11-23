import React from 'react'

const Article = ({ data }) => {
    console.log("ARTICLE .... ", data, data.children)
    const { children, link } = data
    const { title, photo, summary } = children

    return (
        <div data-id="main" className="">
            <div data-id="title" className="">
                <a href={title.link || link}>
                    <h1 className="text-3xl font-semibold">{title.text}</h1>
                </a>
            </div>
            <div data-id="photo" className="block overflow-hidden w-full h-auto">
                <div className="block w-full h-auto">
                    <img className="object-fill object-left-top" src={photo?.link} alt={photo.alt} />
                </div>
            </div>
            <div data-id="summary" className="">
                <a href={summary.link || link}>
                    <h3 className="text-lg font-semibold">{summary.text}</h3>
                </a>
            </div>
        </div>
    )
}

export default Article

Article.sample = <Article data={Article.sampleData} />

Article.sampleData = {
    link: "#",
    children: {
        title: {
            link: "#", // It is a URL
            text: "Lorem ipsum dolor sit amet consectetur.", // This is text
        },
        photo: {
            link: "https://picsum.photos/1600/900",
            alt: "Lorem ipsum dolor sit amet."
        },
        summary: {
            link: "#",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores eos rem."
        }
    }
}

Article.fromForm = (values) => {
    return {
        children: {
            title: {
                link: values["title_link"],
                text: values["title_text"]
            },
            photo: {
                link: values["photo_link"],
                alt: values["photo_alt"]
            },
            summary: {
                link: values["summary_link"],
                text: values["summary_text"]
            }
        }
    }
}

Article.Schema = {
    component: "Form",
    type: "Article",
    label: "Article Test",
    id: "Article Test",
    fields: [
        {
            type: "field_group",
            component: "FieldGroup",
            label: "Title",
            id: "title",
            fields: [
                {
                    component: "Field",
                    label: "Title Text",
                    type: "text",
                    id: "title_text"
                },
                {
                    component: "Field",
                    label: "Title Link",
                    type: "link",
                    id: "title_link"
                }
            ]
        },
        {
            type: "field_group",
            component: "FieldGroup",
            label: "Photo",
            id: "photo",
            fields: [
                {
                    component: "Field",
                    label: "Photo Link",
                    type: "link",
                    id: "photo_link"
                },
                {
                    component: "Field",
                    label: "Photo Alt",
                    type: "text",
                    id: "photo_alt"
                }
            ]
        },
        {
            type: "field_group",
            component: "FieldGroup",
            label: "Summary",
            id: "summary",
            fields: [
                {
                    component: "Field",
                    label: "Summary Text",
                    type: "text",
                    id: "summary_text"
                },
                {
                    component: "Field",
                    label: "Summary Link",
                    type: "text",
                    id: "summary_link"
                }
            ]
        },
    ]
}

Article.Default = {

}