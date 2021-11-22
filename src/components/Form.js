import React, { useEffect, useState } from 'react'

const Field = ({ field, type, value, fieldChanged }) => {
    return (
        <div key={field._uid} className="md:flex md:items-center mb-6">
            <div key={field._uid} className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor={field._uid}>{field.label}</label>
            </div>
            <div className="w-full">
                <input
                    type={type || field.component}
                    id={field._uid}
                    name={field._uid}
                    value={value}
                    onChange={e => fieldChanged(field._uid, e.target.value)}
                    className="bg-gray-300 appearance-none border 
                            border-gray-500 rounded w-full py-2 px-4 
                            text-gray-700 leading-tight focus:outline-none 
                            focus:bg-white focus:border-purple-50" />

            </div>
        </div>
    )
}

const FieldGroup = ({ field, values, fieldChanged }) => {
    const fields = field.fields

    return (
        <fieldset key={field._uid}>
            <div class="flex">
                <h4 className="md:w-1/3 md:text-right pr-4 mb-6 font-semibold text-xl text-gray-500">{field.label}</h4>
                <div className="w-full" />
            </div>
            {fields.map(field => {
                return (
                    <Field
                        key={field._uid}
                        field={field}
                        fieldChanged={fieldChanged}
                        value={values[field._uid]}
                    ></Field>
                )
            })}
        </fieldset>
    )
}

const Form = ({ formData }) => {
    const [page, setPage] = useState(0)
    const [currentPageData, setCurrentPageData] = useState(formData[page])
    const [values, setValues] = useState({})

    useEffect(() => {
        const upcomingPageData = formData[page]
        setCurrentPageData(upcomingPageData)

        setValues(currentValues => {
            const newValues = upcomingPageData.fields.reduce((obj, field) => {
                if (field.component === "field_group") {
                    const x = field.fields.reduce((subFieldObj, subField) => {
                        console.log("Subfield obj", subFieldObj)
                        subFieldObj[subField._uid] = ""

                        return subFieldObj
                    }, {})

                    return Object.assign(obj, x)
                } else {
                    obj[field._uid] = ""
                }

                return obj
            }, {})

            return { ...currentValues, newValues }
        })
    }, [page, formData])

    const fieldChanged = (fieldId, value) => {
        setValues(currentValues => {
            currentValues[fieldId] = value
            return currentValues
        })

        setCurrentPageData(currentPageData => ({ ...currentPageData }))
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className="flex flex-col justify-start items-stretch p-3 w-4/5 h-4/5" onSubmit={onSubmit}>
            <h2 className="self-center font-bold text-3xl">{currentPageData.label}</h2>
            <div className="flex flex-col justify-center h-full">
                {currentPageData.fields.map(field => {
                    switch (field.component) {
                        case "field_group":
                            return (
                                <FieldGroup
                                    key={field._uid}
                                    field={field}
                                    fieldChanged={fieldChanged}
                                    values={values}>
                                </FieldGroup>
                            )
                        default:
                            return (
                                <Field
                                    key={field._uid}
                                    field={field}
                                    fieldChanged={fieldChanged}
                                    value={values[field._uid]}
                                />
                            )
                    }
                })}
            </div>
        </form >
    )
}

export default Form
