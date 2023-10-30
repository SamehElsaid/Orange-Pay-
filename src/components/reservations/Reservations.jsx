import React, { useState } from 'react';
import "../../css/reservation/reservation.css";

const Reservations = () => {
  const [view, setView] = useState('upcoming');

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const reservationsData = [
    {
      date: '2023-07-10',
      adults: 2,
      children: 1,
      total: 1500,
      cancellationDate: '2023-07-07',
    },
    {
      date: '2023-07-15',
      adults: 3,
      children: 0,
      total: 1200,
      cancellationDate: '2023-07-13',
    },
    // Add more reservation data as needed
  ];

  const renderReservations = () => {
    if (view === 'upcoming') {
      return (

        <div className='container '>
                    <p className='slider-title text-center'> Upcoming Reservations </p>

          {reservationsData.map((reservation, index) => (
            <div key={index} className="card reserve-card col-md-12 mb-4">
                <div className='ress'>
              <div className=" row">
              <div className="col-md-4 mb-3 mt-3">
                  <img src="3.jpg" width={381} alt="" />
                </div>
                <div className="col-md-7 mt-5">
                  <h5 className="card-title mb-3">Classic Program</h5>
                  <p className="card-text">
                    <strong className='text-danger'>Deadline of Cancellation:</strong> 
                    <strong className="float-right">{reservation.cancellationDate}</strong>
                    <br /> <br />
                    <strong className='text-secondary'>Adults x</strong> {reservation.adults}
                    <br />  <br />
                    <strong className='text-secondary'>Children x </strong> {reservation.children}
                    <br />  <br />
                    <strong className='text-secondary'>Total:</strong> <strong className='float-right'>{reservation.total} </strong>
                  </p>
                </div>
                <div className=" ress mb-3 mt-3" role="group">
                  <button className=" btn-reservation text-white">Edit Trip</button>
                  <button className="btn-reservation text-white ml-5">Print</button>
                  <button className="btn-cancelation  text-white float-right">Cancel</button>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (view === 'past') {
      return (
       
        <div className="container">
          <p className='slider-title text-center'> Past Reservations </p>
        {reservationsData.map((reservation, index) => (
          <div key={index} className="  card reserve-card col-md-12 mb-4">
            <div className='ress'>
              <div className="row">
                <div className="col-md-4 mb-3 mt-3">
                  <img src="3.jpg" width={381} alt="" />
                </div>
                <div className="col-md-7 mt-5">
                  <h5 className="card-title mb-3">Classic Program</h5>
                  <p className="card-text">
                    <strong className='text-danger'>Deadline of Cancellation:</strong> 
                    <strong className="float-right">{reservation.cancellationDate}</strong>
                    <br /> <br />
                    <strong className='text-secondary'>Adults x</strong> {reservation.adults}
                    <br />  <br />
                    <strong className='text-secondary'>Children x </strong> {reservation.children}
                    <br />  <br />
                    <strong className='text-secondary'>Total:</strong> <strong className='float-right'>{reservation.total} </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    
      
      );
    }
  };

  return (
    <div>
           
           {/* <div className="slider-overlayy"></div> */}
              <div className="slider-text">
        <h1 className="slider-title mt-5">My Reservation</h1>
      </div>
      <div className="reservation-banner">
      <div className="slider-overrlay-res" ></div>
      <img src="2.jpg" className='bbb'  alt="" />
      </div>
    <div className='container  mt-4'>
      <div className=" text-center" role="group">
        <button
          className={`btn btn-secondary reserved-btn upcoming-btn ${view === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleViewChange('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`btn btn-primary reserved-btn ${view === 'past' ? 'active' : ''}`}
          onClick={() => handleViewChange('past')}
        >
          Past
        </button>
      </div>
      <br />
      <br />
      {renderReservations()}
    </div>
    </div>
  );
};

export default Reservations;
