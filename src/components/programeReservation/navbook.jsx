import React, { useState } from 'react';
import "../../css/programeReservation/navbook.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import IncludedExcluded from './include';
import Overview from './overview';
import Programline from './programline';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

export default function Navbook() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [bootCount, setBootCount] = useState(0);
  const [photoSessionCount, setPhotoSessionCount] = useState(0);
  const [weddingService, setWeddingService] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showProgram, setShowProgram] = useState(true);
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [activeComponent, setActiveComponent] = useState('overview');

  const handleNavClick = (component) => {
    setActiveComponent(component);
    document.body.classList.add('nav-active');
  };

  const handleBodyClick = () => {
    document.body.classList.remove('nav-active');
  };

  const decreaseCounter = (type) => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'boot' && bootCount > 0) {
      setBootCount(bootCount - 1);
    } else if (type === 'photoSession' && photoSessionCount > 0) {
      setPhotoSessionCount(photoSessionCount - 1);
    }
  };

  const increaseCounter = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'boot') {
      setBootCount(bootCount + 1);
    } else if (type === 'photoSession') {
      setPhotoSessionCount(photoSessionCount + 1);
    }
  };

  const handleBookNow = () => {
    const data = {
      date: selectedDate,
      adults,
      children,
      bootCount,
      photoSessionCount,
      // weddingService,
    };
    localStorage.setItem('reservationData', JSON.stringify(data));
    setQRCodeValue(
      `Date: ${selectedDate}\nAdults: ${adults}\nChildren: ${children}\Boot Count: ${bootCount}\Photo Session Count: ${photoSessionCount}\Wedding Service: ${weddingService}`
    );
    setShowQRCode(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tips = adults * 750;
  const total = adults * 750 + bootCount * 250 + photoSessionCount * 500 
  // + (weddingService ? 5000 : 0);

  const handleOverviewClick = () => {
    setShowOverview(true);
  };

  const handleProgramClick = () => {
    setShowProgram(true);
  };

  const handleSaveQRCode = () => {
    const canvas = document.querySelector('.qr canvas');
  
    // Check if the canvas element exists
    if (!canvas) {
      console.error('QR code canvas element not found.');
      return;
    }
  
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qr_code.png';
  
    // Simulate a click on the link to trigger the download
    link.click();
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9 ">
          {/* Navigation bar */}
          <nav className="navbar  navbar-expand-lg d-flex justify-content-between w-100 navbar-light bg">
            <ul className="navbar-nav nav-reservation  " onClick={handleBodyClick}>
              <li className={`nav-item mr-5 ${activeComponent === 'overview' ? 'active' : ''}`}>
                <NavLink
                  className={`nav-link o text-dark ${activeComponent === 'overview' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('overview')}
                >
                  Overview
                </NavLink>
              </li>
              <li className={`nav-item mr-5 ${activeComponent === 'program' ? 'active' : ''}`}>
                <NavLink
                  className={`nav-link o text-dark ${activeComponent === 'program' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('program')}
                >
                  Details
                </NavLink>
              </li>
              <li className={`nav-item mr-5 ${activeComponent === 'includedExcluded' ? 'active' : ''}`}>
                <NavLink
                  className={`nav-link o text-dark ${activeComponent === 'includedExcluded' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('includedExcluded')}
                >
                 Included & Excluded
                </NavLink>
              </li>
              <li className={`nav-item ${activeComponent === 'reviews' ? 'active' : ''}`}>
                <NavLink
                  className={`nav-link o text-dark ${activeComponent === 'reviews' ? 'active-link' : ''}`}
                  onClick={() => handleNavClick('reviews')}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Render the active component based on the state */}
          {activeComponent === 'overview' && <Overview />}
          {activeComponent === 'program' && <Programline />}
          {activeComponent === 'includedExcluded' && <IncludedExcluded />}
          {activeComponent === 'reviews' && <Reviews />} 
        </div>

        <div className="overview-container mt-4 col-md-3">
      {/* Date picker */}
      <div className="card-header card-header text-center qq">
              {/* Date picker */}
              <div className="input-group mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="form-control text-center first-date  ml-2"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa-regular fa-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
<div className='row'>
      <div className="additional-service-item col-md-6 ">
        {/* <div className="counter-item"> */}
          <p className=' mt-2'>Adults</p> </div>
          <div className="input-group input-width  col-md-6">
            <i
              className="fa-sharp fa-solid fa-circle-minus"
              onClick={() => decreaseCounter('adults')}
            ></i>
            <input
              type="number"
              className="form-control innn  "
              id="adults"
              min="0"
              value={adults}
              readOnly
            />
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => increaseCounter('adults')}
            ></i>
          </div>
          
        {/* </div> */}
        </div>
<div className='row'>
      <div className="additional-service-item col-md-6 ">
        {/* <div className="counter-item"> */}
          <p className=' mt-2'>children</p> </div>
          <div className="input-group input-width  col-md-6">
            <i
              className="fa-sharp fa-solid fa-circle-minus"
              onClick={() => decreaseCounter('children')}
            ></i>
            <input
              type="number"
              className="form-control innn  "
              id="children"
              min="0"
              value={children}
              readOnly
            />
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => increaseCounter('children')}
            ></i>
          </div>
          
        {/* </div> */}
        </div>
      
        <h5 className="mb-4  mt-3 ">Additional services</h5>

      <div className="additional-services ">

      <div className="">
        
  <div className=" ">
  <div className='row'>
      <div className="additional-service-item col-md-6 ">
        {/* <div className="counter-item"> */}
          <p className=' mt-2'>boot</p> </div>
          <div className="input-group input-width  col-md-6">
            <i
              className="fa-sharp fa-solid fa-circle-minus"
              onClick={() => decreaseCounter('boot')}
            ></i>
            <input
              type="number"
              className="form-control innn  "
              id="boot"
              min="0"
              value={bootCount}
              readOnly
            />
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => increaseCounter('boot')}
            ></i>
          </div>
          
        {/* </div> */}
        </div>

    
    <p className='text-primary'>Boat cruise with a snorkeling stop</p>
  </div>
  <div className='row'>
      <div className="additional-service-item col-md-6 ">
        {/* <div className="counter-item"> */}
          <p className=' mt-2'>Photo Session </p> </div>
          <div className="input-group input-width  col-md-6">
            <i
              className="fa-sharp fa-solid fa-circle-minus"
              onClick={() => decreaseCounter('photoSession')}
            ></i>
            <input
              type="number"
              className="form-control innn  "
              id="photoSession"
              min="0"
              value={photoSessionCount}
              readOnly
            />
            <i
              className="fa-solid fa-circle-plus"
              onClick={() => increaseCounter('photoSession')}
            ></i>
          </div>
          
        {/* </div> */}
        </div>

    
    <p className='text-primary'>Photo session consists of 30 photos + 5 photos free</p>



</div>

        <div className="terms-conditions card-header">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="weddingService"
              checked={weddingService}
              onChange={(e) => setWeddingService(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="weddingService">
              <p className='text-dark'> Terms & Conditions </p>
            </label>
            <p className='text-primary'>Accept Terms & conditions</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <strong>Adults x {adults}</strong> <br />
        <strong>Children x {children}</strong> <br />
        <strong>Boot x {bootCount}</strong> <br />
        <strong>photoSession x {photoSessionCount}</strong> <br />
        <strong>Total: {total}</strong> <br />
        <div className="text-center mt-4">
          <Link to="/booking">
            <button className="book" onClick={handleBookNow}>
              Book Now
            </button>
          </Link>
        </div>
      </div>
      <div className="card-body mt-5 mr-auto children-adult">
                <p className="card-text">
                  <i className="fas fa-exclamation"></i> Children under 4 are free.
                </p>
                <p className="card-text">
                  <i className="fas fa-exclamation"></i> For a full refund, cancel at least 24 hours in advance of the
                  start date of the experience.
                </p>
             </div>
    </div>
    
      </div>
   
    </div>
  );
}
