import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Cart } from '../CartContext';

import "../Components/Css/Card.css";
const Card = (props) => {
    const cart=useContext(Cart);
    const [disable,setDisable]=useState(false);
    const handleClick=()=>{
        var crt=[...cart.cart];
        crt.push({
            id:props.key,
            title:props.title,
            desc:props.desc,
            img:props.img,
            location:props.location,
            area:props.area,
            agent:props.agent,
            price:props.price,
            bedroom:props.bedroom,
            amenity:props.amenity,
            available:props.date
        })
        cart.setCart(crt);
        setDisable(!disable);
    }

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
            <Button 
            className="book-now-btn" 
            variant="contained"
            disabled={disable}
            onClick={handleClick}
            >{disable?"Booked":"Book Now"}</Button>
        </div>
    </div>
  )
}

export default Card;
