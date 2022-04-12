// import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';


export default function Myfile() {
    return (
        <div>
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
   <Link to="/contact">Contact</Link>
   <Link to="/service">Service</Link>

 <Routes>
   <Route path ="/" element={<Home/>}/>
   <Route path ="/about" element={<About/>}/>
   <Route path ="/contact" element={<Contact/>}/>
   <Route path ="/service" element={<Service/>}/>
</Routes>
        </div>
    )
}
