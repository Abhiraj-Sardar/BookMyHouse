import React from 'react'
import "../Components/Css/Card.css";
const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} className="property-image"/>
        <div className="card-content">
            <h2 className="property-title">{props.title}</h2>
            <p className="property-desc">{props.desc}</p>
            <p className="property-location"><strong>Location:</strong> {props.location}</p>
            <p className="property-price"><strong>Price:</strong> ₹{props.price}</p>
            <p className="property-bedrooms"><strong>Bedrooms:</strong> {props.bedrooms}</p>
            <p className="property-area"><strong>Area:</strong> {props.area} sqft</p>
            <p className="property-agent"><strong>Agent:</strong> {props.agent}</p>
            <p className="property-amenity"><strong>Amenities:</strong> {(props.amenity)}</p>
            <p className="property-date"><strong>Available From:</strong> {props.date}</p>
            <button className="book-now-btn">Book Now</button>
        </div>
    </div>
  )
}

export default Card;
