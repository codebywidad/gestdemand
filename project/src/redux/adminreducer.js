import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk for fetching demandes
export const adminfetchdemande = createAsyncThunk(
  'admin/fetchDemande',
  async (userId) => {
    const response = await axios.get(
      `https://6935e745fa8e704dafbf386c.mockapi.io/demandes`
    );
    return response.data;
  }
);

export const adminfetchusers = createAsyncThunk(
  'admin/fetchDemande',
  async (userId) => {
    const response = await axios.get(
      `https://6935e745fa8e704dafbf386c.mockapi.io/users`
    );
    return response.data;
  }
);

const initialState = {
  listeusers: localStorage.getItem("listeusers") 
    ? JSON.parse(localStorage.getItem("listeusers")) 
    : [],
  listedemandes: localStorage.getItem("listedemandes") 
    ? JSON.parse(localStorage.getItem("listedemandes")) 
    : [],
}

const adminSlice = createSlice ({
    name:"admin",
    initialState,
    reducers : {

    },
        extraReducers: (builder) => {
            builder.addCase(adminfetch.fulfilled, (state, action) => {
                state.listedemandes = action.payload;
                localStorage.setItem("demande", JSON.stringify(action.payload));
            });
        }
})

export const { } = adminSlice.actions
export default adminSlice.reducer