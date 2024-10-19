
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from  '../components/UserLogin/Login';
import Footer2 from '../components/UserLogin/Footer2';


function Loginpage() {
    return (
        <div>
           
            <Login />
            <Footer2 />
          
        </div>
    );
}

export default Loginpage