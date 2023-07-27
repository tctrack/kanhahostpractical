export const addEvent = (data) =>{
    console.log('submit');
    return{
        type:"ADDEVENT",
        payload:data
    }
}