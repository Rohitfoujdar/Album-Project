import React from 'react'
import { Link } from 'react-router-dom';


export default function Home({albumData, setAlbumData}){
console.log('check 2', albumData)
const handleDelete = (rohit)=>{
  const filteredUsers = albumData.filter(data => data.id !== rohit);
  const updatedUsers = filteredUsers.map((item, index) => ({
    ...item,
    id: index + 1 // Set new ID based on index (starting from 1)
  }));
  console.log("data-", albumData)
  console.log("filtered DATA", filteredUsers)
  setAlbumData(filteredUsers)
  setAlbumData(updatedUsers);
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
        ))}
     </div>
    );
}