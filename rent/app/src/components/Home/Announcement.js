import React from 'react';
import TopNavbar from '../TopNavbar/Main';
import { Link } from 'react-router-dom';
import Announcement_header from './Announcement_header';
import TypeHome from './TypeHome';
import Rooms from './Rooms';
import Price from './Price';
import RoomSize from './RoomSize';
import Coment from './Coment';
import Photo from './Photo';
import Communication from './Communication';
import Dashboard from './adminPanel/Dashboard';
import { Route,Routes } from 'react-router-dom';
import UserItem from './adminPanel/UserItem';
import MyProfile from './adminPanel/MyProfile';

function Announcement() {
  return (
    <div>
        <TopNavbar />
      <div className='Dashboard_left_fixed'>
       
          <Dashboard />
          <Routes>
          <Route path='userItem'  element={<UserItem />}/>
          {/* <Route path='myProfil' element={<MyProfile />} /> */}
        </Routes>
      </div>

        <div className='big_announcement'>
            <div className='item_announcement'>
                <Announcement_header/>
                <TypeHome />
                <Rooms />
                <Price />
                <RoomSize />
                <Coment />
                <Photo />
                <Communication />
            </div>
        </div>
    </div>
  )
}

export default Announcement