import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar"
import './App.css';


function App() {
  const [dogs, setDogs] = useState({
    data:null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs() {
       try {
          const res = await axios.get("http://localhost:5000/dogs");
          setDogs({
             data: res.data,
             isLoading: false
          });
       } catch (error) {
          console.error("Error loading dogs:", error);
          setDogs({
             data: null,
             isLoading: false,
             error: "Failed to load dogs. Please try again later."
          });
       }
    }
    loadDogs();
 }, []);

 if (dogs.isLoading) {
   return <h2>Loading...</h2>;
}

if (dogs.error) {
   return <h2>{dogs.error}</h2>;
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
