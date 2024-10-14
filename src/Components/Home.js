import React from 'react'
import { Link } from 'react-router-dom';


export default function Home({albumData, setAlbumData}){

const handleDelete = (rohit)=>{
  const filteredUsers = albumData.filter(data => data.id !== rohit);
  console.log("data-", albumData)
  console.log("filtered DATA", filteredUsers)
  setAlbumData(filteredUsers)
}
    return(
     <div className='user'>
       {albumData?.map((item)=>(
         <div className='parent'>
          <div className='id-title'>
            <p className='id'>{item.id}.</p>
            <p className='title' >{item.title}</p>
            <Link to={`/updated/${item.id}`}><button className='btn1'>Update</button></Link>
            <button className='btn2' onClick={()=>handleDelete(item.id)}>Delete</button>
          </div>  
         </div>
        ))};
     </div>
    );
}