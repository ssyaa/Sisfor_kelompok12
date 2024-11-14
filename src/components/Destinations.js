// src/components/Destinations.js
import React, { useState, useEffect } from "react";
import DestinationCard from "../DestinationCard";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebaseConfig";
import "./Destinations.css";


const db = getFirestore(app);

function Destinations() {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
    const fetchDestinations = async () => {
        const querySnapshot = await getDocs(collection(db, "destinations"));
    setDestinations(querySnapshot.docs.map((doc) => doc.data()));
    };
    
    fetchDestinations();
}, []);

return (
    <div className="destinations">
        <h2>Jelajahi Berbagai Destinasi di Sulawesi Selatan</h2>
        <div className="destination-list">
        {destinations.map((dest, index) => (
            <DestinationCard key={index} name={dest.name} image={dest.image} />
        ))}
        </div>
    </div>
    );
}

export default Destinations;