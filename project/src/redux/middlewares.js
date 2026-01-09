import axios from "axios";
import { useSelector } from "react-redux";

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

  // if (action.type === "user/fetchDemande") {

  //   const id = store.getState().USER.user.id;

  //   try {
  //           const res = axios.get(
  //               "https://6935e745fa8e704dafbf386c.mockapi.io/demandes", { params: { id }}
  //           );
  //           console.log(res)  
  //       } catch (error) {
  //           console.error(error);
  //       }

    
  // }

  return next(action);
};
