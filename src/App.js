import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./Routelist";
import NavBar from "./NavBar"
import './App.css';


function App() {
  const [dogs, setDogs] = useState({
    data:null,
    isLoading: true
  });

  useEffect(()=> {
    async function loadDogs(){
      const res= await axios.get("http://localhost:5000/dogs")
      setDogs({
        data: res.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])
  if(dogs.isLoading){
    return <h2>Loading...</h2>
  }
  return (
   <div>
    <h1>Welcome</h1>
    <BrowserRouter>
      <NavBar dogs={dogs.data} />
      <div>
        <RouteList dogs={dogs.data} />
      </div>
    </BrowserRouter>
   </div>
  );
}

export default App;
