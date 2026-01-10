import axios from "axios";
import { adminlogout } from "./adminreducer";


export const colorMiddleware = store => next => action => {
    console.log("Action dispatched:", action.type);

  if (action.type === "user/changeColor") {
    const user = store.getState().USER.user;
    
    console.log("before action");
    
    axios.put(
      `https://6935e745fa8e704dafbf386c.mockapi.io/users/${user.id}`,
      { ...user, couleur: action.payload }
    ).catch(error => {
      console.error("Failed to update color:", error);
    });
    
    console.log("after action");
  }

    if (action.type === "user/logout") {
    store.dispatch(adminlogout());
  }

  return next(action);
};
