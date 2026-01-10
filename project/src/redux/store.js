import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userreducer';
import adminReducer from './adminreducer';
import {colorMiddleware} from "./middlewares"

const store = configureStore({
  reducer: {
    USER : userReducer, 
    ADMIN : adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorMiddleware),
});
export default store;

