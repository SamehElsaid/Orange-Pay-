import React, { useEffect, useState } from 'react';
// import './SignInSignUp.css';
import "../../css/sign/sign.css";
import { NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SignInSignUp from './signinsignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';






export default function SignIn(){
    const [selectedOption, setSelectedOption] = useState('user');
    // const [email, setEmail] = useState('');
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()


    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
        const userData = {
          userName :  form.elements.name.value,
          password : form.elements.Password.value,
        };
        if(userData.userName === "user" && userData.password === "password"){
          localStorage.setItem('userData', JSON.stringify(userData));
          e.target.reset()
          navigate('/')
          toast.success("Welcome Back")
        }else{
          toast.error("incorrect information")
        }
    };
    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    const renderEmailLabel = () => {
        if (selectedOption === 'company') {
          return <label htmlFor="">Company Email Address</label>;
        } else {
          return <label htmlFor="">User Name</label>;
        }
      };

    return (
      <div>  
      <div className="overlay-sign">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
                    
          
          <div className="btn-group-sign" >
            <NavLink
              to="/signin/user"
              className={` nav-link o  ${selectedOption === 'user' ? 'active' : ''}`}
              onClick={() => handleOptionChange('user')}
            >
              User
            </NavLink>
            <NavLink
              to="/signin/company"
              className={`nav-link o  ${selectedOption === 'company' ? 'active' : ''}`}
              onClick={() => handleOptionChange('company')}
            >
              Company
            </NavLink>
          </div>
      
              <h5 className='mt-2 mb-4'>Sign In</h5>
            <form className="sign-in-form" onSubmit={(e)=>handleSignIn(e)}>
            <div className="form-group">
              {renderEmailLabel()}
              <div className="input-group">
              <input
                type="user"
                className="form-control"
                placeholder="user name"
                // value={userName}
                // onChange={(e) => setUserName(e.target.value)}
                name='name'
                required
              />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password"
                  // value={password}
                  name='Password'
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>
              </div>
            
            <button type="submit" className="btn btn-orange btn-block">
              Sign In
            </button>
            
            <div className="text-center mt-3">
              <p>
                Forgot your password? <Link href="/">Reset Password</Link>
              </p>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
            </div>
        
        </div>
        </div>
      </div>
      </div>
    );
  };
 
