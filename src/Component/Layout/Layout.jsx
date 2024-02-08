import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'


export default function Layout() {
 return <>
<Navbar/>
<Outlet/>
 <Footer/>

 </>
}
