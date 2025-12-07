import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router";

export default function Signin() {
const [email,setEmail] = useState("")
const [pw,setPw] = useState("")
const [liste,setListe] = useState([])
const [perss,setPer] = useState({})
const [err,setErr] = useState("")

 useEffect(()=>{
                    axios.get(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire`)
                    .then((res) => {const pers = res.data; setListe(pers);  });
                    console.log(liste);
                    console.log(perss);
    },[]); 

function checkemail(e){
    e.preventDefault()

    setPer(liste.find((per)=> per.email === email ));
    console.log(perss);
    if(!perss) setErr("email")
    else { if (perss.MotDePasse !== pw) setErr("pw")
           else {setErr("connected");}
    }
    
}


    return <>
    <div className="auth-container">
        <div className="auth-box">
            <h1><Link to="/">se connecter</Link></h1>
                <form onSubmit={(e) => checkemail(e)}>
                    <input type="email" nom="email" placeholder="Email" value={email} required  onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" nom="password" placeholder="Mot de passe" value={pw} required onChange={(e)=>setPw(e.target.value)} />
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