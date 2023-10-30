import React from 'react'
import "../../css/related.css";
import { Link } from 'react-router-dom';
export default function Programpage() {
  return (
<div>
<div className="slider-text  ">
<h1 className="slider-title mt-5 ">Programms</h1>
</div>
<div className="reservation-banner mb-4">
<div className="slider-overrlay-res" ></div>
<img src="3.jpg" className='bbb' alt="" />
</div>
       <div className='container mt-4'>
<div className=' row '>
<div className="col-md-4">
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
    <img src="Mask.png" alt="Image 1" className="card-img-top" />
    <Link to='/programs'>
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
<div className="col-md-4">
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
    <img src="Mask2.png" alt="Image 2" className="card-img-top" />
    <div className="card-body">
      <h5>Go island program</h5>
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
  </div>
</div>
<div className="col-md-4">
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
    <img src="Mask3.png" alt="Image 3" className="card-img-top" width="344" height="279" />
    <div className="card-body">
      <h5>Photo session program</h5>
      <p className="card-text text-primary">500 EGP Per Person</p>
      <p className="card-text text-primary">250 EGP Per Person</p>
      <div className="rating">
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
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
    <img src="Mask3.png" alt="Image 3" className="card-img-top" width="344" height="279" />
    <div className="card-body">
      <h5>Photo session program</h5>
      <p className="card-text text-primary">500 EGP Per Person</p>
      <p className="card-text text-primary">250 EGP Per Person</p>
      <div className="rating">
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
        <span className="orange-star"></span>
      </div>
    </div>
  </div>
</div>

</div>

</div>
    </div>
  )
}
