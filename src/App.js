import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


const App = () => {
  const [albumData, setAlbumData] = useState();

useEffect(()=>{
  fetchData()
},[])

const fetchData = async() => {
  try{
    const Url = "https://jsonplaceholder.typicode.com/albums"
    const response= await fetch(Url)
    const data = await response.json()
    setAlbumData(data);
    console.log("++=", data)
  }catch(err){
    console.log("Error using fetching the data: ", err)
  }
}

  return ( 
    <div>
      <Navbar/> 
      <Home albumData={albumData} setAlbumData={setAlbumData}/>    
    </div>
  );
}

export default App;
