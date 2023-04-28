import React from 'react';
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from './Dashboard';


function MyNews() {
  return (
    <> 
    <TopNavbar />
    <Dashboard />
    <div className='My_news_header'>
        <h1>my news menyusi</h1>
    </div>
    </>
  )
}

export default MyNews