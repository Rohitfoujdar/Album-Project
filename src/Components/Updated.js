import React, { useState } from 'react'
import { Link, useParams} from 'react-router-dom';

export default function Updated(albumData, setAlbumData){
    const [message, setMessage] = useState('');
    const {id, title} = useParams();

    const handleChange = (event) =>{
      setMessage(event.target.value);
    }
    
    const updated =()=>{
        
    }

    // const updated = () =>{
    //     albumData[id-1].title= message ;
    //     console.log('_data_________' , albumData  );
    //     setAlbumData(albumData)
    // }
    return(
        <div className='updated'>
         <Link to={"/"}> <img src='https://cdn-icons-png.flaticon.com/128/4518/4518043.png' alt='back-btn'   className='upd-image'/> </Link>
         <div>
          <input className='upd-input' type='text' placeholder={id.title} onChange={handleChange}/>
         </div> 
         <div>
          <Link to={"/"}><button className='upd-btn' onClick={updated}>Update</button></Link>
         </div>
        </div>
    );
}