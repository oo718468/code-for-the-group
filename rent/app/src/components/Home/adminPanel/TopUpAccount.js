import React from 'react';
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from './Dashboard';


function TopUpAccount() {
  return (
    <>
    <TopNavbar />
    <Dashboard />
        <div className='header_TopUpAccount'>
           <h1> TopUpAccount</h1>
        </div>
    </>
    
  )
}

export default TopUpAccount;