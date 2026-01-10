import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk for fetching demandes
export const fetchDemande = createAsyncThunk(
  'user/fetchDemande',
  async (userId) => {
    const response = await axios.get(
      `https://6935e745fa8e704dafbf386c.mockapi.io/demandes?userId=${userId}`
    );
    return response.data;
  }
);

const initialState = {
  user: localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user")) 
    : null,
  isLogged: localStorage.getItem("isLogged") 
    ? JSON.parse(localStorage.getItem("isLogged")) 
    : false,
  demande: localStorage.getItem("demande") 
    ? JSON.parse(localStorage.getItem("demande")) 
    : null,
}

const userSlice = createSlice ({
    name:"user",
    initialState,
    reducers : {
        login : (state,action) => {
            state.user = action.payload;
            state.isLogged = true;
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("isLogged", JSON.stringify(true));
        },
        logout : (state) => {
            state.user = {};
            state.isLogged = false;
            state.demande = []
            localStorage.removeItem("user")
            localStorage.removeItem("isLogged")
            localStorage.removeItem("demande")
            
            
        },
        changeColor : (state,action) =>{
            state.user.couleur = action.payload;
            localStorage.setItem("user",JSON.stringify(state.user));
        }
    },
        extraReducers: (builder) => {
            builder.addCase(fetchDemande.fulfilled, (state, action) => {
                state.demande = action.payload;
                localStorage.setItem("demande", JSON.stringify(action.payload));
            });
        }
})

export const { login, logout, changeColor } = userSlice.actions
export default userSlice.reducer