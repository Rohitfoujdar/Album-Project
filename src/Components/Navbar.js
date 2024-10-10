import React from 'react'

export default function Navbar(){
    return(
        <div className='navbar'>
          <div className='Nav-opt'>
            <img src="https://cdn-icons-png.flaticon.com/128/3208/3208679.png" className='nav-img' alt='logo'/>
            <a href="/" className='nav-opt'>Home</a>
            <a href="/add-album" className='nav-opt'>Add Album</a>
          </div>
        </div>
    );
}
