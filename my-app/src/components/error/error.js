import React from 'react';
import './error.css';
import img from './error.jpg';

const ErrorMessage = () => {
   return (
      <>
         <div className="error-img"><img src={img} alt='error'></img></div>
         <span>Error message</span>
      </>
   ) 
}

export default ErrorMessage;