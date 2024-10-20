import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';

export default function Updated({albumData, setAlbumData}){
    const {id} = useParams();
    // const [updateTitle, setUpdateTitle] = useState(albumData[id-1].title || '');
    const [updateTitle, setUpdateTitle] = useState('');
    const router = useNavigate()

    useEffect(()=> {
        albumData?.forEach(element => {
            if(element.id == id){
                setUpdateTitle(element.title)
            }
        });
    }, [])

    const handleChange = (event) =>{
      setUpdateTitle(event.target.value);
    }
    
    const updated = () => {
        setAlbumData((prevDATA) => {
            const updatedAlbumData = [...prevDATA];
            updatedAlbumData[id - 1] = {
                ...updatedAlbumData[id - 1],
                title: updateTitle,
            };
            return updatedAlbumData;
        });
    }

    
    return(
        <div className='updated'>
         <Link to={"/"}> <img src='https://cdn-icons-png.flaticon.com/128/4518/4518043.png' alt='back-btn'   className='upd-image'/> </Link>
         <div>
          <input className='upd-input' type='text' value={updateTitle} onChange={handleChange}/>
         </div> 
         <div>
          <Link to={"/"}><button className='upd-btn' onClick={updated}>Update</button></Link>
         </div>
        </div>
    );
}