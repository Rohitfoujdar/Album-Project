import React, { useState } from 'react'
import { Link, useParams} from 'react-router-dom';

export default function Updated(albumData, setAlbumData){
    const {id} = useParams();
    const [message, setMessage] = useState('');


    const handleChange = (event) =>{
      setMessage(event.target.value);
    }

    const updated = () =>{
        albumData[id-1].title = message ;
        console.log('_data_________' , albumData  );
        setAlbumData(albumData)
    }
    return(
        <div className='updated'>
         <Link to={"/"}> <img src='https://cdn-icons-png.flaticon.com/128/4518/4518043.png' alt='back-btn'   className='upd-image'/> </Link>
         <div>
          <input className='upd-input' type='text' placeholder='Enter new title...' onChange={handleChange} value={message}/>
         </div> 
         <div>
          <button className='upd-btn' onClick={()=> updated(id)}>Update</button>
         </div>
        </div>
    );
}