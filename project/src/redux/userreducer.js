import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
}

const userSlice = createSlice ({
    name:"user",
    initialState,
    reducers : {
        login : (state,action) => {
            state.user = action.payload;
            state.isLogged = true;
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("isLogged", JSON.stringify(true))
        },
        logout : (state) => {
            state.user = {};
            state.isLogged = false;
            localStorage.removeItem("user")
            localStorage.removeItem("isLogged")
        },
        changeColor : (state,action) =>{
            state.user.couleur = action.payload;
            localStorage.setItem("user",JSON.stringify(state.user));
        }
    }   

})

export const { login, logout, changeColor } = userSlice.actions
export default userSlice.reducer



