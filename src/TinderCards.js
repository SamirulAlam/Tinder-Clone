import React, { useState } from 'react';
import TinderCard from "react-tinder-card"


function TinderCards() {
    const [people,setPeople]=useState([]);
    return (
        <div >
            {people.map((person)=>(
                <TinderCard>
                    <div style={{backgroundImage:`url(${person.url})`}} className="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>  
            ))}
        </div>
    )
}

export default TinderCards
