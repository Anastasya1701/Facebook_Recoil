import {atom, selector} from "recoil";

const initialState = {
    firstName: 'firstName',
    lastName: 'lastName',
    inputThird: 'third',
}

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: initialState, // default value (aka initial value)
});


// const charCountState = (field) => {
//     return selector({
//         key: 'field', // unique ID (with respect to other atoms/selectors)
//         get: ({get}) => {
//             const text = get(textState[field]);
//
//             return text.length;
//         },
//     })
// }

export {
    textState,
    // charCountState,
}
