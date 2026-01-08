import { userReducer } from "./userreducer";


const root = combineReducers({
    user : userReducer,

})

export default root;

