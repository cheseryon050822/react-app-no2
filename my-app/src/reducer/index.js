import {ADD_EVENT,DELETE_ALL_EVENT,BULE_WAVE} from '../actions/index';

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
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        const result = words.filter(word => word.length > 10);
        console.log(result);
        return state;

    }
};

export default reducer;