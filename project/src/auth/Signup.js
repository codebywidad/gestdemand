import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Signup() {
const [nom,setNom] = useState("")
const [prenom,setPrenom] = useState("")
const [age,setAge] = useState("")
const [pseudo,setPseudo] = useState("")
const [couleur,setCouleur] = useState("#ffffff")
const [pays,setPays] = useState("")
const [devise,setDevise] = useState("")
const [avatar,setAvatar] = useState("")
const [photos,setPhotos] = useState("")
const [email,setEmail] = useState("")
const [pw,setPw] = useState("")
const [confpw,setConf] = useState("")
const [liste,setListe] = useState([])
const [err,setErr] = useState("")

    useEffect(()=>{
                    axios.get(`https://6935e745fa8e704dafbf386c.mockapi.io/users`)
                    .then((res) => {const pers = res.data; setListe(pers); });
    },[]);
      

function handleSignup(e) {
  e.preventDefault();

  // 1. check if email already exists
  const existingUser = liste.find((per) => per.email === email);

  if (existingUser) {
    setErr("Email already exists");
    return;
  }

  // 2. check passwords match
  if (pw !== confpw) {
    setErr("Passwords do not match");
    return;
  }

  // 3. create user object
  const newUser = {
    nom,
    prenom,
    age,
    pseudo,
    couleur,
    pays,
    devise,
    avatar,
    photos,
    email,
    MotDePasse: pw,
  };

  // 4. send to API
  axios
    .post("https://6935e745fa8e704dafbf386c.mockapi.io/users", newUser)
    .then(() => {
      setErr("Account created successfully");
    })
    .catch(() => {
      setErr("Error creating account");
    });
}



    return <>
    <div className="auth-container">
        <div className="auth-box">
            <h1><Link to="/">Créer un compte</Link></h1>
                <form onSubmit={handleSignup}>
                    <div className="form-grid">
                        <input type="text" name="nom" placeholder="Nom" value={nom}   onChange={(e)=>setNom(e.target.value)} />
                        <input type="text" name="prenom" placeholder="Prenom" value={prenom}   onChange={(e)=>setPrenom(e.target.value)} />
                        <input type="text" name="pseudo" placeholder="Pseudo"  value={pseudo}   onChange={(e)=>setPseudo(e.target.value)} />
                        <input type="number" name="age" placeholder="Age"  value={age}   onChange={(e)=>setAge(e.target.value)} />
                    </div>
                        <input type="email" name="email" placeholder="Email"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
                    <div className="form-grid">   
                        <input type="password" name="pass" placeholder="Mot de passe"  value={pw}  onChange={(e)=>setPw(e.target.value)} />
                        <input type="password" name="confpass" placeholder="confirmez Mot de passe" value={confpw}  onChange={(e)=>setConf(e.target.value)} />
                        <input type="text" name="pays" placeholder="Pays"  value={pays}   onChange={(e)=>setPays(e.target.value)} />
                        <input type="text" name="devise" placeholder="Devise"  value={devise}   onChange={(e)=>setDevise(e.target.value)} />
                        <input type="text" name="photos" placeholder="Liens du photos"  value={photos}   onChange={(e)=>setPhotos(e.target.value)} />
                        <input type="text" name="avatar" placeholder="Liens d'avatar" value={avatar}   onChange={(e)=>setAvatar(e.target.value)} />
                    </div>    
                        <input type="color" name="couleur" value={couleur}   onChange={(e)=>setCouleur(e.target.value)} />
                        
                        <input type="submit"  value="Créer" />
                    
                </form>
                <ul> 
                    <li>{err}</li>        
                </ul>
                <br></br>
                <p>déja un compte ? <Link to="/auth/signin">connectez-vous</Link></p>
        </div>
    </div>
    </>

}