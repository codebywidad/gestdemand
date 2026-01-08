import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Layout.css";

function Sidemenu() {
  const user = useSelector((state) => state.USER.user);

  if (!user) return null;

  return (
            <nav className="side-menu">
            <h5 className="menu-title">
                {user.admin ? "Admin Menu" : "Visitor Menu"}
            </h5>

            <ul className="menu-list">
                <li>
                <NavLink to="/layout/accueil" className="menu-link">
                    Accueil
                </NavLink>
                </li>

                <li>
                <NavLink to="/layout/profile" className="menu-link">
                    Voir mon profil
                </NavLink>
                </li>

                <li>
                <NavLink to="/layout/modifierCouleur" className="menu-link">
                    Modifier couleur
                </NavLink>
                </li>

                {!user.admin && (<>
                <li>
                    <NavLink to="/layout/ajouterDemande" className="menu-link">
                    envoyer une demande
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/layout/demandes" className="menu-link">
                    Mes demandes
                    </NavLink>
                </li>
                </>
                )}

                {user.admin && (
                <>
                    <li>
                    <NavLink to="/layout/listerUtilisateurs" className="menu-link">
                        Liste utilisateurs
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/layout/AjouterUtilisateur" className="menu-link">
                        Ajouter utilisateur
                    </NavLink>
                    </li>

                    <li>
                    <NavLink to="/layout/demandes-admin" className="menu-link">
                        Gérer demandes
                    </NavLink>
                    </li>
                </>
                )}
            </ul>
            </nav>
        );

}

export default Sidemenu;
