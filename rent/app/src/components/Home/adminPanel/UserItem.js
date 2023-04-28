import React from 'react';
import user_logo from "../../../assets/images/user_logo.svg"

function UserItem() {
  return (
    <div className='header_big_user'>
    <div className='heder_user'>
        <div className='user_logo'>
            <img src={user_logo} /> 
        </div>
        <div className='user_name_number'>
            <h4>Jennifer Lowrance</h4>
            <p>+998 77 604 77 66</p>
        </div>
    </div>
    </div>
  )
}

export default UserItem