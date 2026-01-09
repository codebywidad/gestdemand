import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function addDemande(){
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const dispatch = useDispatch()


    

    const handlesubmit = (e)=>{
            e.preventDefault()

            const demande = {
                titre : title,
                description : desc,


            }
            

        axios.post("https://6935e745fa8e704dafbf386c.mockapi.io/demandes", demande)
             .then(() => { dispatch(adddemande(demande)); })
             .catch(() => {console.log("Error creating account");});


    }


    return<>
            <form onSubmit={handlesubmit}>

                <label>titre</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  />

                <label>description</label>
                <textarea type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                
                <button>envoyer</button>
            </form>
    </>


}