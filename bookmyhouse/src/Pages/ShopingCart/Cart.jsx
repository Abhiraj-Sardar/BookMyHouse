import React, { useState } from 'react'
import "./Css/Cart.css"
import Navbar from '../../Components/Navbar';
import { Process } from '../../Components/Process';


export const Cart = () => {
  

  return (
    <div className="container-fluid cart-page">
        <Navbar/>
        <h1>Welcome To Cart Page</h1>
        <br />
        <h1 className='container'><Process/></h1>
        <br />
        
    </div>
  )
}
