import React from 'react'
import Form from '../components/Form'

const schemas = [
    {
        component: "Form",
        type: "Random",
        label: "Random Test",
        id: "Random Test",
        fields: [
            {
                type: "field_group",
                component: "FieldGroup",
                label: "Name",
                id: "name",
                fields: [
                    {
                        component: "Field",
                        label: "First Name",
                        type: "text",
                        id: "first_name"
                    },
                    {
                        component: "Field",
                        label: "Last Name",
                        type: "text",
                        id: "last_name"
                    }
                ]
            },
            {
                component: "Field",
                label: "Email",
                type: "email",
                "id": "email"
            },
            {
                component: "Field",
                label: "Phone",
                type: "text",
                id: "phone"
            }
        ]
    }
]

const ContentForm = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Form structure={schemas[0]} />
        </div>
    )
}

export default ContentForm
