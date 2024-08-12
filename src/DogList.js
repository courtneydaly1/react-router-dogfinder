import React from "react";
import { Link }  from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h1>
                Welcome! We have so many dogs to choose from. 
                Click on a dog for more information.
            </h1>
            <div>
                {dogs.map(d => (
                    <div key={d.name}>
                        <img src={`/${d.src}.jpg`} alt={d.name} />
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DogList;
