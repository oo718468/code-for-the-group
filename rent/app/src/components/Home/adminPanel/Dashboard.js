import React from 'react';
import UserItem from './UserItem';
import MyProfile from './MyProfile';
import { Link } from 'react-router-dom';
import user_logo from "../../../assets/images/user_logo.svg";
import callCentr from "../../../assets/images/callCentr.svg";
import myprofil from "../../../assets/images/myprofil.svg";
import mynews from "../../../assets/images/mynews.svg";
import massage from "../../../assets/images/massage.svg";
import topUpAccount from "../../../assets/images/topUpAccount.svg";
import savedlogo1 from "../../../assets/images/savedlogo.svg";
import exit from "../../../assets/images/exit.svg";

function Dashboard() {
  return (
    <div className='header_dashboard'>
        <UserItem />
        <div className='profile_items'>
        <Link to="/myProfil" >
            <div className='my_profil_first'> 
            <span></span>               
                <div className='user_logo1'>
                    <img src={myprofil} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Mening profilim</h4>
                </div>
           </div>
        </Link> 
        <Link to="/myNews">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={mynews} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Mening e'lonlarim</h4>
                </div>
            </div>
          </div>
        </Link> 
        <Link to="/ourSellers">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={callCentr} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Bizning agentlarimiz</h4>
                </div>
            </div>
          </div>
        </Link>
        <Link to="/massage">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={massage} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Xabarlar</h4>
                </div>
            </div>
          </div>
        </Link>
        <Link to="/topUpAccount">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={topUpAccount} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Xisobni to'ldirish</h4>
                </div>
            </div>
          </div>
        </Link>
        <Link to="/saved1">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={savedlogo1} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>Saqlangan</h4>
                </div>
            </div>
          </div>
        </Link>
        <Link to="/exit">
          <div className='my_News_header'>
            <div className='my_profil_first'>
            <span></span>  
               <div className='user_logo1'>
                    <img src={exit} /> 
                </div>
                <div className='user_name_number1'>
                    <h4>chiqish</h4>
                </div>
            </div>
          </div>
        </Link>
        </div>
    </div>
  )
}

export default Dashboard;