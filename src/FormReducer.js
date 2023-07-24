import { createSlice } from "@reduxjs/toolkit";
import { eventList } from "./EventList";

const userSlice = createSlice({
    name:'events',
    initialState:eventList,
    reducers:{
        addEvent: (state, action) =>{
            state.push(action.payload)
        }
    }
})

export const {addEvent} = userSlice.actions;
export default userSlice.reducer;