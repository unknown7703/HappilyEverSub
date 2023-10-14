import { createSlice } from '@reduxjs/toolkit';

const initialState =
[
    {slot:" 5",time:"4",name:"Aatreya",age:20}
]
const postsSlice=createSlice(
    {
        name:'posts',
        initialState,
        reducers:{
            userAdded(state,action)
            {
                state.push(action.payload)
            }
        }
    }
)

export const {userAdded}=postsSlice.actions
export default postsSlice.reducer 