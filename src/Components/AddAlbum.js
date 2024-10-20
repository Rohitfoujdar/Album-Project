import React, { useState } from "react";
import { Link} from 'react-router-dom';

export default function AddAlbum({albumData, setAlbumData}) {
    const [newAlbum, setNewAlbum]  = useState("")
    // const navigate = useNavigate();

    const handlechange = (event) =>{
        setNewAlbum(event.target.value);
    }

    const albumAdd = () => {
    const newAlbumObject = {
        id: albumData.length + 1, 
        title: newAlbum, 
      };

     setAlbumData((prevData) =>[...prevData, newAlbumObject]);
     setNewAlbum("");
    }

    // const albumAdd = () =>{
    //     setAlbumData ((prevDATA)=>{
    //      const newAlbumObject = [...prevDATA]
    //      newAlbumObject = {
    //         id: albumData.length + 1, 
    //         title: newAlbum, 
    //      };
    //      return newAlbumObject;
    //     })
    // }

    
    

    return (
        <div className='updated'>
         <Link to={"/"}> <img src='https://cdn-icons-png.flaticon.com/128/4518/4518043.png' alt='back-btn'   className='upd-image'/> </Link>
         <div>
          <input className='upd-input' value={newAlbum} onChange={handlechange} placeholder="Enter your title here..." type='text'/>
         </div> 
         <div>
          <Link to={"/"}><button className='upd-btn' onClick={albumAdd}>Add New Album</button></Link>
         </div>
        </div>
    );
}