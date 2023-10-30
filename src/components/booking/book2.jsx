import React, { useState } from 'react';
import "../../css/booking/book.css";
import { Link } from 'react-router-dom';
import Booking from './book1';
const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div>
    
                  <div className="slider-text  ">
        <h1 className="slider-title mt-5 paytext">Classic Program</h1>
      </div>
      <div className="reservation-banner">
      <div className="slider-overrlay-res" ></div>
      <img src="dining.png" className='bbb' alt="" />
      </div>
      <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mt-4 mb-4">
        <img src="pay2.png" alt="Top Image" className="top-image" />
      </div>
    </div>
    <div className='col-md-5 float-right'> <img src="reset.png" alt="" /> </div>

    <div className='col-md-7'>
      <div className="row mb-5">

        <div className="col-md-12">
          {/* Payment Method Images */}
          <div className="payment-methods">
            <img
              className={`payment-method-img ${selectedMethod === 'visa' ? 'selected' : ''}`}
              style={{ width: '190px', height: '50px' }}
              src="visa.png"
              alt="Visa"
              onClick={() => handleMethodClick('visa')}
            />
            <img
              className={`payment-method-img ml-4 ${selectedMethod === 'paypal' ? 'selected' : ''}`}
              src="paypal.png"
              style={{ width: '190px', height: '50px' }}
              alt="PayPal"
              onClick={() => handleMethodClick('paypal')}
            />
            <img
              className={`payment-method-img ml-4 ${selectedMethod === 'cash' ? 'selected' : ''}`}
              src="cash1.png"
              style={{ width: '190px', height: '60px' }}
              alt="Cash"
              onClick={() => handleMethodClick('cash')}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Card Number Input */}
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {/* Expiration Date Input */}
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date:</label>
            <input type="text" id="expirationDate" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          {/* CVV Input */}
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" className="form-control" />
          </div>
        </div>
        <div className="row mt-4">
        <div className="col-md-12">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              Accept Terms & Conditions
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6"> 
        <Link to="/booking">
          <button type="button" style={{ width: '240px', height: '50px' }}   className="returnn">
            Back
          </button>
          </Link>
        </div>
        
        <div className="col-md-6">
        <Link to="/qrbook">
          <button type="button" className="returnn1 float-right" style={{ width: '10px', height: '50px' }} >
            Pay
          </button>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentMethod;
