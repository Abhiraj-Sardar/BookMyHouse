import React from 'react'
import "./Css/PaymentPortal.css"
const PaymentPortal = () => {
    return (
    <div className="payment-container">
        <div className="payment-form">
          <h2>Payment Portal</h2>
          <form>
            <div className="form-group">
              <label for="cardName">Cardholder Name</label>
              <input type="text" id="cardName" className="payment-input" placeholder="Enter Cardholder Name"/>
            </div>
            <div className="form-group">
              <label for="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" className="payment-input" placeholder="XXXX XXXX XXXX XXXX"/>
            </div>
            <div className="form-group">
              <label for="expDate">Expiration Date</label>
              <input type="text" id="expDate" className="payment-input" placeholder="MM/YY"/>
            </div>
            <div className="form-group">
              <label for="cvv">CVV</label>
              <input type="password" id="cvv" className="payment-input" placeholder="XXX"/>
            </div>
          </form>
        </div>
    </div>
)
    
}

export default PaymentPortal