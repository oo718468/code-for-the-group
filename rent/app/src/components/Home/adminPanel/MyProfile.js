import React from 'react';
import news from "../../../assets/images/news.svg";
import TopNavbar from "../../TopNavbar/Main";
import Dashboard from './Dashboard';

function MyProfile() {
  return (
    <>
     <TopNavbar />
     <Dashboard />
    <div className='myProfil_items'>
    <h1>Mening Profilim menyusi</h1>
    </div>
    </>
  )
}

export default MyProfile;