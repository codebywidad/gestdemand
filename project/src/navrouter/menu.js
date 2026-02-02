import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logout } from "../redux/userreducer";
import { useState } from "react";

export default function Menu (){
    const [isLog,setIsLogged] = useState(useSelector((state)=>state.USER.isLogged))
    const dispatch = useDispatch();

    return <>
    <nav className="barre-navigation">
            <div className="logo">&lt;Gest<span>Demand</span>/&gt;</div>
            <ul className="menu-navigation">
                <li><a href="/#fonctionnalites">Fonctionnalitées</a></li>
                <li><a href="/#technologies">Technologies</a></li>
                <li><a href="/#processus">Processus</a></li>
                <li><a href="/#contact">Contact</a></li>
                 {!isLog && <>
                    <li><Link to="/auth/signin">Sign in</Link></li>
                    <li><Link to="/auth/signup">Sign up</Link></li>
                    </>
                 }
                 {isLog && <>
                 <li><Link to="/layout">Layout</Link></li>
                 <button className="btn btn-dark" onClick={()=>{dispatch(logout());setIsLogged(false)}}>Log out</button>
                 </>}


                
            </ul>
    </nav>
    </> 
}