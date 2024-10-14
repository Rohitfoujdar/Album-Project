import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Updated from './Components/Updated';
import {  BrowserRouter, Routes ,Route,} from "react-router-dom";




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
     <BrowserRouter>
       <Navbar/>  
      <Routes>
       <Route path="/" element={ <Home albumData={albumData} setAlbumData={setAlbumData}/>} />
       <Route path="/updated/:id" element={ <Updated albumData={albumData} setAlbumData={setAlbumData}/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
