import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar, BsClock } from 'react-icons/bs';
const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
  return (
    <div>
                     <div className="slider-text  ">
        <h1 className="slider-title mt-5 paytext">Classic Program</h1>
      </div>
      <div className="reservation-banner mb-4">
      <div className="slider-overrlay-res" ></div>
      <img src="dining.png" className='bbb' alt="" />
      </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <img src="pay1.png" alt="Top Image" className="top-image" />
        </div>
      </div>
      <div className='col-md-5 float-right'> <img src="reset.png" alt="" /> </div>

<div className='col-md-7'>
<div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="datePicker">Date:</label>
          <div className="input-group date-book">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <BsCalendar />
              </span>
            </div>
            <DatePicker
              id="datePicker"
              selected={selectedDate}
              onChange={handleDateChange}
              className="form-control text-center "
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </div>
    
  
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" className="form-control" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" className="form-control" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="request">Request:</label>
            <textarea id="request" className="form-control" rows="3"></textarea>
          </div>
        </div>
      </div>

      <div className="row">
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
          <button type="button" style={{ width: '240px', height: '50px' }}   className="returnn">
            Back
          </button>
        </div>
      
        <div className="col-md-6">
        <Link to="/payment" >
          <button type="button" style={{ width: '10px', height: '50px' }} className="returnn1 float-right"  >
            Pay
          </button>
          </Link>
        </div>
     
      </div>
    </div>
    </div>
    </div>
  );
};

export default Booking;
