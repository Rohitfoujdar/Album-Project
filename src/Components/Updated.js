import React from 'react'
import { Link } from 'react-router-dom';

export default function Updated(){
    return(
        <div className='updated'>
         <Link to={"/"}> <img src='https://cdn-icons-png.flaticon.com/128/4518/4518043.png' alt='back-btn'   className='upd-image'/> </Link>
         <div>
          <input className='upd-input' type='text' placeholder='Enter new title...'/>
         </div> 
         <div>
          <button className='upd-btn'>Update</button>
         </div>
        </div>
    );
}