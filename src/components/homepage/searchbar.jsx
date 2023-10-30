import React , { useEffect, useState }  from 'react';
import { BsPeople, BsCalendar, BsGlobe } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import "../../css/Searchbar.css";
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div className="search-bar mt-2">
          <div className="search-bar-overlay mt-3"></div> 
    
       <div className="w-100">
   
      <DatePicker
        className="w-100 b-none"
        selected={selectedDate}
        onChange={handleDateChange} 
        placeholderText="Pick your Date"
        dateFormat="MM/dd/yyyy"
      />
    </div>
        <Link to="/program">
        <button className="search-button">Search</button>
        </Link>
      </div>
    );
  };
  export default SearchBar ; 