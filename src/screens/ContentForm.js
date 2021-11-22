import React from 'react'
import Form from '../components/Form'

const schemas = [
    {
        "type": "Random",
        "label": "Random Test",
        "id": "Random Test",
        "fields": [
            {
                "type": "field_group",
                "label": "Name",
                "id": "name",
                "fields": [
                    {
                        "label": "First Name",
                        "type": "text",
                        "id": "first_name"
                    },
                    {
                        "label": "Last Name",
                        "type": "text",
                        "id": "last_name"
                    }
                ]
            },
            {
                "label": "Email",
                "type": "email",
                "id": "email"
            },
            {
                "label": "Phone",
                "type": "text",
                "id": "phone"
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
