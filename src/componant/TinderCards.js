import React, {useEffect, useState} from 'react';
import './TinderCards.css';
import database from "../firebase";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        database.collection("people").onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        )
    },[people])
    return(
        <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up','down']}
                >
                    <div
                        style={{backgroundImage:`url(${person.url})`}}
                        className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            
        </div>
    )
}

export default TinderCards;