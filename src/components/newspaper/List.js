import React from 'react'

const List = ({ data }) => {
    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}

export default List

List.sampleData = (n) => {
    const xs = [...Array(n).keys()].map(i => ({
        title: "Lorem ipsum dolor sit amet.",
        link: "#"
    }))

    return {
        children: [
            xs
        ]
    }
}

List.Schema = {
    component: "List",
    type: "Array",
    label: "List Test",
    id: "List Test",
    fields: [
        {
            type: "list",
            member: "text",
            component: "List",
            label: "list",
            id: "list",
        }
    ]
}
