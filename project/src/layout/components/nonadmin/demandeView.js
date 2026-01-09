import { useSelector } from "react-redux"

export default function ViewDemande(){


    const liste = useSelector(state=>state.USER.demande)

    return<>
    
    <ul>
            {liste.map(el =>
                <li key={el.id}>{el.titre}{el.description}{el.statu}</li>
            )}
    </ul>
            
    </>


}