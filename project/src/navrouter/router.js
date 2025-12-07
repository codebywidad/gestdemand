import  {Route, Routes } from 'react-router'
import Homepage from '../homepage/homepage'

import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Layout from '../layout/layout'
import Auth from '../auth/auth'

export default function Routers(){
    
    return <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/auth" element={<Auth />}>
                <Route path="" element={<Signin />}/>
                <Route path="signin" element={<Signin />}/>
                <Route path="signup" element={<Signup />}/>
            </Route>
            <Route path="/layout" element={<Layout />} >
                <Route />
            </Route>
                
            
        </Routes>
    </>

}