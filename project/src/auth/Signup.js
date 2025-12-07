import axios from "axios";
import { useState } from "react";
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
const [perss,setPer] = useState({"exist" : "none"})
const [err,setErr] = useState("")

function checkemail(e){
    e.preventDefault()

    axios.get(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire`)
         .then((res) => {const pers = res.data; setListe(pers); })
         .then(liste.map((per)=>{if(per.email == email) setPer(per)}));
    console.log(liste);
    console.log(perss);

    if(perss.exist == "none") setErr("email")
    else { if (perss.MotDePasse != pw) setErr("pw")
           else {setErr("connected");}
    }
    
}


    return <>
    <div className="auth-container">
        <div className="auth-box">
            <h1><Link to="/">Créer un compte</Link></h1>
                <form onSubmit={(e) => checkemail(e)} >
                    <div className="form-grid">
                        <input type="text" name="nom" placeholder="Nom"                                 value={nom} required  onChange={(e)=>setNom(e.target.value)} />
                        <input type="text" name="prenom" placeholder="Prenom"                           value={prenom} required  onChange={(e)=>setPrenom(e.target.value)} />
                        <input type="text" name="pseudo" placeholder="Pseudo"                           value={pseudo} required  onChange={(e)=>setPseudo(e.target.value)} />
                        <input type="number" name="age" placeholder="Age"                               value={age} required  onChange={(e)=>setAge(e.target.value)} />
                    </div>
                        <input type="email" name="email" placeholder="Email"                            value={email} required  onChange={(e)=>setEmail(e.target.value)} />
                    <div className="form-grid">   
                        <input type="password" name="pass" placeholder="Mot de passe"                   value={pw} required onChange={(e)=>setPw(e.target.value)} />
                        <input type="password" name="confpass" placeholder="confirmez Mot de passe"     value={confpw} required onChange={(e)=>setConf(e.target.value)} />
                        <input type="text" name="pays" placeholder="Pays"                               value={pays} required  onChange={(e)=>setPays(e.target.value)} />
                        <input type="text" name="devise" placeholder="Devise"                           value={devise} required  onChange={(e)=>setDevise(e.target.value)} />
                        <input type="text" name="photos" placeholder="Liens du photos"                  value={photos} required  onChange={(e)=>setPhotos(e.target.value)} />
                        <input type="text" name="avatar" placeholder="Liens d'avatar"                   value={avatar} required  onChange={(e)=>setAvatar(e.target.value)} />
                    </div>    
                        <input type="color" name="couleur"                                              value={couleur} required  onChange={(e)=>setCouleur(e.target.value)} />
                        
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