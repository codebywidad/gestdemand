import { useState } from "react";
import { Link } from "react-router";

export default function Signin() {
const [email,setEmail] = useState("")
const [pw,setPw] = useState("")
    return <>
    <h1><Link to="/">signin</Link></h1>
        <form>
            <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={pw}  onChange={(e)=>setPw(e.target.value)} />
            <input type="submit" value="khribi" />
        </form>
        {email}{pw}
    </>

}