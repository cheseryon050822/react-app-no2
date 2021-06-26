import {ADD_EVENT,DELETE_ALL_EVENT,BULE_WAVE,INCREMENT,DECREMENT, REQUIEM,LOTTE} from '../actions/index';
const reducer = (state=[],action)=>{
    switch (action.type) {
    case ADD_EVENT:
        const event={title:action.title,body:action.title};
        const id = state.length + 1
        console.log(id)
        return [...state,{id,...event}];
    case DELETE_ALL_EVENT:
            return []
    case BULE_WAVE:
        const result = state.filter(data => data.id !== action.id)
        console.log(result)
        return result
    case INCREMENT:
        return{...state,count:state.count +1};
    case DECREMENT:
        return{...state,count:state.count -1};
    case REQUIEM:
        return{...state,count:0};
    case LOTTE:
        var num = state.count +1
    if  (state.count %3===0) {
        console.log(state.count +10)
        return state
        }else{
        console.log(state.count +0)
        return state
    }
    }   
    };　
export default reducer;