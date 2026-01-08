import { useSelector } from "react-redux"

export default function Profile(){
    const user = useSelector((state)=>state.USER.user)

return <>
        profile:
        {Object.entries(user).map(([key, value]) => (
            value && 
               <p key={key}>
                    <strong>{key}</strong> : {String(value)}
                </p>
            
        
      ))}


</>

}