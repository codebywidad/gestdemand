import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDemande } from "../../../redux/userreducer";


export default function AddDemande(){

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const dispatch = useDispatch();
    const id = useSelector(state=>state.USER.user.id);
    const [isSubmitting, setIsSubmitting] = useState(false);

    

    const handlesubmit = async (e)=>{
            e.preventDefault()
            setIsSubmitting(true);

            const demande = {
                titre : title,
                description : desc,
                userId : id,
                statu : "pending"
            }
            

        try {
            await axios.post("https://6935e745fa8e704dafbf386c.mockapi.io/demandes", demande);
            await dispatch(fetchDemande(id)).unwrap();
            
            // Clear form after successful submission
            setTitle("");
            setDesc("");
        } catch (error) {
            console.log("Error creating demande:", error);
        } finally {
            setIsSubmitting(false);
        }
    }


    return<>
            <form onSubmit={handlesubmit}>

                <label>titre</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  disabled={isSubmitting} required/>

                <label>description</label>
                <textarea type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} disabled={isSubmitting} required/>
                
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "envoyer"}
                </button>
            </form>
    </>


}