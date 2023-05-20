/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    // eslint-disable-next-line no-undef
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate("/")
    }
return (
    <div className="flex  relative justify-center h-screen">
      <img className="w-full h-full" src="https://images.template.net/wp-content/uploads/2022/09/Maintenance-404-Error-Page-Ideas-and-Examples.jpg" />
      <button onClick = {handleGoBack} className="absolute bottom-[173px] font-Montserrat text-lg px-12 pt-6 pb-12 btn d-btn">
        Go back to home
      </button>
    </div>
  );
};

export default ErrorPage;