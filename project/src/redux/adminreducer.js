import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create async thunk for fetching demandes
export const adminfetchdemande = createAsyncThunk(
  'admin/fetchDemande',
  async () => {
    const response = await axios.get(
      `https://6935e745fa8e704dafbf386c.mockapi.io/demandes`
    );
    return response.data;
  }
);

export const adminfetchusers = createAsyncThunk(
  'admin/fetchusers',
  async () => {
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
        adminlogout : (state) => {
            localStorage.removeItem("listedemandes");
            localStorage.removeItem("listeusers");
            state.listedemandes = []; 
            state.listeusers = [];
        },
    },
        extraReducers: (builder) => {
            builder.addCase(adminfetchdemande.fulfilled, (state, action) => {
                state.listedemandes = action.payload;
                localStorage.setItem("listedemandes", JSON.stringify(action.payload));
            });

            builder.addCase(adminfetchusers.fulfilled, (state, action) => {
                state.listeusers = action.payload;
                localStorage.setItem("listeusers", JSON.stringify(action.payload));
            });
        }
})

export const { adminlogout } = adminSlice.actions
export default adminSlice.reducer