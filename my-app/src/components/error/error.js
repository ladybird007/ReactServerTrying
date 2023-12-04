import React from 'react';
import './error.css';

const ErrorMessage = () => {
   return (
      <>
         <div className="error-img"><img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img></div>
         <span>Error message</span>
      </>
   ) 
}

export default ErrorMessage;