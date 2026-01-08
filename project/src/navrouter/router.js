import  {Route, Routes } from 'react-router'
import Homepage from '../homepage/homepage'
import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Layout from '../layout/layout'
import Auth from '../auth/auth'
import Acceuil from '../layout/components/acceuil'
import Profile from '../layout/components/profile'
import Couleur from '../layout/components/couleur'
import Users from '../layout/components/listeusers'
import User from '../layout/components/user'

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
                <Route path="demandes" element={ <AddDemande/> }/>
                <Route path="ajouterDemande" element={ <ViewDemande/> }/>
                <Route path="listerUtilisateurs" element={<Users/>}/>
                <Route path="AjouterUtilisateur" element={<User/>}/>
            </Route>
                
            
        </Routes>
    </>

}