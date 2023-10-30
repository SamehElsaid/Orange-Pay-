import React, { useState } from 'react';
import "../../css/profile/profile.css";
import { Link } from 'react-router-dom';

const MyProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      phone,
      currentPassword,
      newPassword,
      confirmPassword,
      city,
      country,
      address,
    });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setCity('');
    setCountry('');
    setAddress('');
  };

  return (
    <div>
    <div className="slider-text">
    <h1 className="slider-title">My profile</h1>
  </div>
  <div className="reservation-banner">
  <div className="slider-overrlay-res" ></div>
  <img src="dining.png" className='bbb' alt="" />
  </div>
    <div className="container mt-5">
    <div className="my-profile-section">
      <h2>Basic Info</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" className="form-control" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" className="form-control" />
          </div>
        </div>
      </div>
    </div>

    <div className="my-profile-section mt-5">
      <h2>Security</h2>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password" id="currentPassword" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" className="form-control" />
      </div>
    </div>

    <div className="my-profile-section mt-5">

      <h2>My Address</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" className="form-control" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" className="form-control" />
      </div>
    </div>

    <div className="my-profile-section mt-5 ">
      <h2>My Wishlist</h2>
      {/* Add your wishlist cards here */}
      <div className="col-md-4 mt-5">
        <div className="card border-0" style={{ width: '344px', height: '516px' }}>
          <div className="top-left">
            <p className="start-price start">
              Start from <br />
              <strong className="start-price"> 850 EGP </strong>
            </p>
          </div>
          <div className="top-right">
            <div className="circle">
              <i className="fa-sharp fa-solid fa-heart fa-fade"></i>
            </div>
          </div>
          <Link to='/programs'>
          <img src="Mask.png" alt="Image 1" className="card-img-top" />
          <div className="card-body">
            <h5 className='text-dark'>Classic program</h5>
            <p className="card-text text-primary">1000 EGP Per Person</p>
            <p className="card-text text-primary">750 EGP Per Children</p>
            <div className="rating">
              <span className="orange-star"></span>
              <span className="orange-star"></span>
              <span className="orange-star"></span>
              <span className="orange-star"></span>
              <span className="orange-star"></span>
            </div>
          </div>
          </Link>
        </div>
    </div>
  </div>
  <div className="row mt-4">
        <div className="col-md-6">
          <Link to='/'>
          <button type="button" style={{ width: '240px', height: '50px' }}   className="returnn">
            Back
          </button>
          </Link>
        </div>
      
        <div className="col-md-6">
        
          <button type="button" style={{ width: '10px', height: '50px' }} className="returnn1 float-right"  >
            Update
          </button>
     
        </div>
     
      </div>
  </div>
  </div>
);
};

export default MyProfile;