import React, { useEffect, useRef, useState } from 'react'

const Field = ({ field, type, onValueChange }) => {
    const [value, setValue] = useState(null)

    return (
        <div key={field.id} className="md:flex md:items-center mb-6">
            <div key={field.id} className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor={field.id}>{field.label}</label>
            </div>
            <div className="w-full">
                <input
                    type={type || field.type}
                    id={field.id}
                    name={field.id}
                    value={value || ''}
                    onChange={e => {
                        setValue(e.target.value)
                        onValueChange(field.id, e.target.value)
                    }}
                    className="bg-gray-50 
                            text-gray-400 
                            appearance-none 
                            border 
                            border-gray-300 
                            rounded 
                            w-full 
                            py-2 px-4 
                            leading-tight 
                            focus:text-blue-400 
                            focus:outline-none 
                            focus:border-2 
                            focus:border-blue-400" />

            </div>
        </div>
    )
}

const FieldGroup = ({ field, onValueChange }) => {
    const fields = field.fields

    return (
        <fieldset key={field.id}>

            {/* <div className="flex">
                <h4 className="md:w-1/3 md:text-right pr-4 mb-6 font-semibold text-xl text-gray-500">{field.label}</h4>
                <div className="w-full" />
            </div> */}

            {fields.map(field => {
                return (
                    <Field
                        key={field.id}
                        field={field}
                        onValueChange={onValueChange}
                    ></Field>
                )
            })}
        </fieldset>
    )
}

const Form = ({ schema }) => {
    //const [page, setPage] = useState(0)
    //const [currentPageData, setCurrentPageData] = useState(formData[page])
    const [values, setValues] = useState({})

    useEffect(() => {
        //const upcomingPageData = formData[page]
        //setCurrentPageData(upcomingPageData)

        setValues(currentValues => {
            const newValues = schema.fields.reduce((obj, field) => {
                if (field.type === "field_group") {
                    obj = field.fields.reduce((subFieldObj, subField) => {
                        console.log("Subfield obj", subFieldObj)
                        subFieldObj[subField.id] = ""

                        return subFieldObj
                    }, obj)

                    return obj //Object.assign(obj, x)
                } else {
                    obj[field.id] = ""
                }

                return obj
            }, {})

            return { ...currentValues, ...newValues }
        })
    }, [schema])

    const fieldValue = (fieldId) => {
        console.log("GETTING FIELD VALUE .... ", values)
        return values[fieldId]
    }

    const handleValueChange = (fieldId, value) => {
        //console.log("field id", fieldId, value)
        setValues(currentValues => {
            currentValues[fieldId] = value
            console.log("field changed ... ", currentValues)
            return currentValues
        })

        //setCurrentPageData(currentPageData => ({ ...currentPageData }))
    }

    console.log("V A L U E S is .... ", values)
    const handleSubmit = e => {
        e.preventDefault();

        console.log("Values is ... ", values)
    }

    const handleCancel = e => {
        e.preventDefault();

        console.log("Values is ... ", values)
    }

    return (
        <div className="flex flex-col justify-between items-stretch p-3 w-4/5 h-4/5">
            <h2 className="self-center align-start font-bold text-3xl">{schema.label}</h2>
            <form className="p-3" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center h-full">
                    {schema.fields.map(field => {
                        switch (field.type) {
                            case "field_group":
                                return (
                                    <FieldGroup
                                        key={field.id}
                                        field={field}
                                        onValueChange={handleValueChange}>
                                    </FieldGroup>
                                )
                            default:
                                return (
                                    <Field
                                        key={field.id}
                                        field={field}
                                        onValueChange={handleValueChange}
                                    />
                                )
                        }
                    })}

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        </div>
                        <div className="w-full">
                            <button className="w-full shadow-md border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-50  opacity-90
                     focus:shadow-outline focus:outline-none 
                     text-blue-400 font-semibold py-2 px-4 
                     rounded cursor-pointer mb-6
                     transform transition duration-500 
                     hover:scale-105
                     " type="button"
                                onClick={e => { handleSubmit(e) }}>
                                Submit
                            </button>

                            <button className="w-full shadow-md border-2 border-red-400 hover:bg-red-400 hover:text-gray-50 opacity-90
                     focus:shadow-outline focus:outline-none 
                     text-red-400 font-semibold py-2 px-4 rounded cursor-pointer transform transition duration-500 
                     hover:scale-105" type="button"
                                onClick={e => { }}>
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </form >
        </div>
    )
}

export default Form
