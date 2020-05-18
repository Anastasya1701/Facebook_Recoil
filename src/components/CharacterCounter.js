import React from 'react'
import {useRecoilState, useRecoilValue} from "recoil";
import {textState} from "./atom/testState";
import {Input} from "./Input";


const CharacterCounter = () => {
    return (
        <div>
            <TextInput/>
        </div>
    )
}

const TextInput = () => {

    const [text, setText] = useRecoilState(textState)

    const onChange = (value, field) => {
        setText({...text, [field]: value});
    }

    return (
        <div>
            <Input field='firstName' value={text['firstName']} onChange={onChange}/>
            <br/>
            Echo: {text.firstName}
            {/*<CharacterCount field='firstName'/>*/}
            <br/>
            <Input field='lastName' value={text['lastName']} onChange={onChange}/>
            <br/>
            Echo: {text.lastName}
            {/*<CharacterCount field='lastName'/>*/}
            <br/>
            <Input field='inputThird' value={text['inputThird']} onChange={onChange}/>
            <br/>
            Echo: {text.inputThird}
            {/*<CharacterCount field='inputThird'/>*/}
        </div>
    );
}

// const CharacterCount = ({field}) => {
//
//     const count = useRecoilValue(charCountState(field))
//
//     return <>Character Count: {count}</>;
// }


export {
    TextInput,
    CharacterCounter,
}
