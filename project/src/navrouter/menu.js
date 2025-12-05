import { Link } from "react-router";

export default function Menu (){

    return <>
    <nav class="barre-navigation">
            <div class="logo">&lt;Gest<span>Demand</span>/&gt;</div>
            <ul class="menu-navigation">
                <li><a href="#fonctionnalites">Fonctionnalitées</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#processus">Processus</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/auth/signin">Sign in</Link></li>
                <li><Link to="/auth/signup">Sign up</Link></li>
            </ul>
    </nav>
    </> 
}