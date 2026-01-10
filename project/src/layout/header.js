import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../redux/userreducer";


export default function Header({ previewColor }){
const dispatch = useDispatch()
const navigate = useNavigate()
    const user = useSelector((state)=>state.USER.user)
    
    return <>
    
    <div className="layoutheader" 
         style={{   
            position:"relative",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            borderBottom:`4px solid ${previewColor}`,
            boxShadow:`0 0 15px ${previewColor}`
        }}>
        <img src={user.photo || null} alt="pdp" style={{width:'40px',height:"40px", borderRadius:'50%'}}/>
        <h1>
        {user.nom}{" "}
        {user.prenom}{" "}
        {user.pseudo}
        </h1>
        <button onClick={()=>{dispatch(logout());navigate("/auth/signin")}}>log out</button>
    </div>

    </>

}