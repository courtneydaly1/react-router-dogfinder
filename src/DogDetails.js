import React from 'react';
import { Link, Navigate } from "react-router-dom";



function DogDetails({ dog }){
    if (!dog) return <Navigate to="/dogs" />
    return (
        <div className='DogDetail-row'>
            <div>
                <img src={`/${dog.src}.jpg`} alt={dog.name} />
                <h1>{dog.name}</h1>
                <h2>{dog.age} years old.</h2>
                <ul>
                    {dog.facts.map((fact, i)=>(
                        <li key ={i}>
                            {fact}
                        </li>
                    ))}
                </ul>
                <Link to="/dogs">Go Back</Link>

            </div>

        </div>
    );
}

export default DogDetails;