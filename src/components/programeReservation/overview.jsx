import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../css/programeReservation/overview.css";
import { FaCheck } from 'react-icons/fa';

const Overview = () => {
  const [showArrows, setShowArrows] = useState(true);
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideCount = 5;

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove the next and previous arrows
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    customPaging: (i) => <CustomPagination goToSlide={goToSlide} currentSlide={i} slideCount={5} />,
    beforeChange: () => {
      setShowArrows(false);
    },
    afterChange: () => {
      setShowArrows(true);
    },
  };
  
  const CustomPagination = ({ currentSlide, slideCount, goToSlide }) => (
    <ul className="custom-dots">
      {Array.from({ length: slideCount }).map((_, index) => (
        <li
          key={index}
          className={index === currentSlide ? 'active' : ''}
          onClick={() => goToSlide(index)}
        >
         <div className={`circle ${index === currentSlide ? 'active' : ''}`}>
          {index + 1}
        </div>
        </li>
      ))}
    </ul>
  );
  
  return (
    <div>
      <Slider {...settings} ref={sliderRef} >
        <div>
          <img src="Mask2.png" className='overimg' alt="Image 1" />
        </div>
        <div>
          <img src="Mask3.png" className='overimg' alt="Image 2" />
        </div>
        <div>
          <img src="Mask.png" className='overimg' alt="Image 3" />
        </div>
        <div>
          <img src="im7.png" className='overimg' alt="Image 4" />
        </div>
        <div>
          <img src="eve.png" className='overimg' alt="Image 5" />
        </div>
      </Slider>
      <br />
        <div className="slider-pagination ">
      <CustomPagination goToSlide={goToSlide} currentSlide={currentSlide} slideCount={slideCount} />
    </div>
      <div className="box-container">
        <div className="line">
          <FaCheck className="check-icon" />
          Boat cruise with a snorkeling stop
        </div>
        <div className="line">
          <FaCheck className="check-icon" />
          Rest and relax on one of the most amazed islands on Giftun
        </div>
        <div className="line">
          <FaCheck className="check-icon" />
          National Park Buffet lunch in Dolphin restaurant
        </div>
      </div>
      <div className='float-left mt-5'> <p>Love to explore the colorful underwater life of red sea, did you dream of swimming with shoal of tiny beautiful and colorful fishes, we will provide you with snorkeling gears and one stop in famous reef area. then will take you to the magical visit of Orange bay. between sun kisses and the water hugs of the sea, you can joyfully play on the swing or relax on the bean bags. Hungry! Enjoy our touristic buffet we prepared specially for you on the dolphin restaurant with couple of soft drinks free.

Love to order different drinks, don’t worry, we accept cash or credit on our bars.

Boat cruise with a snorkeling stop then, rest and relax on one of the most amazed islands on Giftun National Park with buffet lunch in Dolphin restaurant. </p> </div>
    </div>
  );
};

export default Overview;
