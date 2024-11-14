// src/components/DestinationCard.js
import React from "react";
import "./DestinationCard.css";

function DestinationCard({ name, image }) {
    return (
    <div className="destination-card">
        <img src={image} alt={name} />
        <h3>{name}</h3></div>);
}

export default DestinationCard;
