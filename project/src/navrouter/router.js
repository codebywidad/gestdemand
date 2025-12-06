import  {Route, Routes } from 'react-router'
import Homepage from '../homepage/homepage'

import Signin from '../auth/Signin'
import Signup from '../auth/Signup'
import Layout from '../layout/layout'

export default function Routers(){
    
    return <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/auth" element={<Signin />} />
                <Route path="/auth/signin" element={<Signin />}/>
                <Route path="/auth/signup" element={<Signup />}/>
            <Route/>
            <Route path="/layout" element={<Layout />} />
                
            <Route/>
        </Routes>
    </>

}