import React from 'react'

export const Input = ({value, field, onChange}) => {

    const onChangeInput = (e) => {
        onChange(e.target.value, field)
    }

    return <input type="text" value={value} onChange={onChangeInput}/>
}
