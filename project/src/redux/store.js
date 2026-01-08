import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userreducer';
import {colorMiddleware} from "./middlewares"

const store = configureStore({
  reducer: {
    USER : userReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorMiddleware),
});
export default store;

