export const initialState = {
        list :[{item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    due_by:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1).toDateString(),
    due:false
    }]
}
      

// new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7)

export const reducer = (state,action) => {
    switch(action.type){
        case "TOGGLE_COMPLETED" : 
        return {
            list: state.list.map(todo => {
              console.log(todo);
              return todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo;
            })
          };
        
        case "ADD_TODO" : 
        return {...state,list:[...state.list,action.newItem]}
        
        case "CLEAR_COMPLETED" :
            return {
                list:state.list.filter(todo => todo.completed != true)
                
            }
        case "OVERDUE" :
            return {
list: state.list.map(todo => {
    console.log(todo)
    return todo.due_by === action.payload 
    ? {...todo,due:true} 
    : todo
})
}
        default:
            return state}

        }
