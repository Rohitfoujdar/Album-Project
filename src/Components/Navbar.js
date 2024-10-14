import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div className='navbar'>
          <div className='Nav-opt'>
            <img src="https://cdn-icons-png.flaticon.com/128/3208/3208679.png" className='nav-img' alt='logo'/>
            <Link to="/" className='nav-opt'>Home</Link>
            <Link to="/add-album" className='nav-opt'>Add Album</Link>
          </div>
        </div>
    );
}
