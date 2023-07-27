let initialVal = [];

const addEventFormData = (state = initialVal, action) =>{
    console.log(action.payload);
    if(action.type == "ADDEVENT"){
        console.log(action.payload);
        return [...state, action.payload];
    }else{
        return state
    }
    console.log(state);
}

export default addEventFormData;