import {ADD_EVENT,DELETE_ALL_EVENT} from '../actions/index';

const reducer = (state=[],action)=>{
    switch (action.type) {
    case ADD_EVENT:
        const event={title:action.title,body:action.title};
        const id = state.length + 1
        console.log(id)
        return [...state,{id,...event}];
    case DELETE_ALL_EVENT:
        const Nankai={title:action.title,body:action.title};
        const di = state.length  - 
        console.log(di)
        return [...state,{di,...Nankai}];
    default:
        return state;

    }
};

export default reducer;