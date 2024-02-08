import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Contacts from './Component/Contacts/Contacts'
import Portfolio from './Component/Portfolio/Portfolio'
import Home from './Component/Home/Home'






export default function App() {
    let routers = createBrowserRouter([
        {path:"", element:<Layout/>,children:[
            {index:true, element:<Home/>},
            {path:"About", element:<About/>},
            {path:"Contacts", element:<Contacts/>},
            {path:"Portfolio", element:<Portfolio/>}
    
        ]}
    
     ])
return <>
<RouterProvider router ={routers}/> 
</>

}


