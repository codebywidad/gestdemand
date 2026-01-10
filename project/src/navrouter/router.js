import  {Route, Routes } from 'react-router'
import Homepage from '../homepage/homepage'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Layout from '../layout/layout'
import Auth from '../auth/auth'
import Acceuil from '../layout/components/acceuil'
import Profile from '../layout/components/profile'
import Couleur from '../layout/components/couleur'
import Users from '../layout/components/admin/listeusers'
import AddUser from '../layout/components/admin/adduser.js'
import AddDemande from '../layout/components/nonadmin/demandeAdd'
import ViewDemande from '../layout/components/nonadmin/demandeView'
import LDemande from '../layout/components/admin/listedemande.js'


export default function Routers(){
    
    return <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="*" element={<Homepage/>}/>
            <Route path="/auth" element={<Auth />}>
                <Route path="" element={<Signin />}/>
                <Route path="signin" element={<Signin />}/>
                <Route path="signup" element={<Signup />}/>
            </Route>
            <Route path="/layout" element={<Layout />} >
                <Route path="" element={<Acceuil />}/>
                <Route path="accueil" element={<Acceuil />}/>
                <Route path="profile" element={<Profile/> }/>
                <Route path="modifierCouleur" element={ <Couleur/> }/>
                <Route path="demandes" element={ <ViewDemande /> }/>
                <Route path="ajouterDemande" element={ <AddDemande />  }/>
                <Route path="listerUtilisateurs" element={<Users/>}/>
                <Route path="AjouterUtilisateur" element={<AddUser />}/>
                <Route path="listeDemande" element={<LDemande/>}/>
            </Route>
                
            
        </Routes>
    </>

}