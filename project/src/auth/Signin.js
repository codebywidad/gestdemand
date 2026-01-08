import { useEffect, useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userreducer";



export default function Signin() {
const navigate = useNavigate(); 
const [email,setEmail] = useState("");
const [pw,setPw] = useState("");
const [liste,setListe] = useState([]);
const [err,setErr] = useState("");
const dispatch = useDispatch();
const isLog = useSelector((state)=>state.USER.isLogged)



useEffect(() => {
        if(isLog){
            navigate("/");
        } 

        const fetchUsers = async () => {
            try {
            const res = await axios.get(
                "https://6935e745fa8e704dafbf386c.mockapi.io/users"
            );
            setListe(res.data);
            } catch (error) {
            console.error(error);
            }
        };

        fetchUsers();
        }, []);

function checkemail(e) {
  e.preventDefault();

  const user = liste.find((per) => per.email === email);

  if (!user) {
    setErr("email");
    return;
  }

  if (user.MotDePasse !== pw) {
    setErr("pw");
    return;
  }

  setErr("connected");
  dispatch(login(user));
  navigate("/layout");
}



    return <>
    <div className="auth-container">
        <div className="auth-box">
            <h1><Link to="/">se connecter</Link></h1>
                <form onSubmit={(e) => checkemail(e)}>
                    <input type="email" name="email" placeholder="Email" value={email} required  onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" name="password" placeholder="Mot de passe" value={pw} required onChange={(e)=>setPw(e.target.value)} />
                    <ul> 
                        <li>{err}</li>        
                    </ul>
                    <input type="submit"  value="se connecter" />
                </form>
                <br></br>
                <p>pas de compte ? <Link to="/auth/signup">créer un</Link></p>
        </div>
    </div>
    </>

}