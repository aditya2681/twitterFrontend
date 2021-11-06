const tokenReducer= (state = [] ,action)=>{
    switch(action.type){
        case "expire":
           return  action.value;
           default:
               return state;
    }
}

export default tokenReducer;