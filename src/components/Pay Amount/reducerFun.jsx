export const reducerFun= (state, action)=>{
    switch(action){
        case '2500':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, 2500: true};
        }
        case '5000':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, 5000: true};
        }
        case '15000':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, 15000: true};
        }
        case '25000':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, 25000: true};
        }
        case '50000':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, 50000: true};
        }
        case 'other':{
            Object.keys(state).forEach(key => state[key]= false);
            return {...state, other: true};
        }
        default:
            return state;
    }
}