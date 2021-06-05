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
        state.filter={}
        console.log(action.id)
        let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
        function filterItems(arr, query) {
            return arr.filter(function(el) {
                return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
            })
          }
          
          console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
          console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
        return[]
        
        default:
            return state
    }
};
export default reducer;