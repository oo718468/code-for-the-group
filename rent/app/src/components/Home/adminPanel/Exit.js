import React from 'react';
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from './Dashboard';

function Exit() {
  return (
    <>
    <TopNavbar/>
    <Dashboard />
    <div className='header_exit'>
        <h1>Exit</h1>
    </div>
    </>
    
  )
}

export default Exit