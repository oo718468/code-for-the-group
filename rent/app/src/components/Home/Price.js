import React from 'react';
import price from "../../assets/images/price.svg";
import DownArraw from "../../assets/images/downarrow.svg";
import UpArraw from "../../assets/images/uparrow.svg";
import { useState, useRef } from 'react';
import rent from '../../json/rent.json';






function Price() {

    const [isOpen,setIsOpen] = useState(false);


  return (
    <div className='Big_price'>
        <div className='first_price'>
           
        <button><img src={price} /> <p>Narxlar</p></button>
        </div>
        <div className='second_price'>
            <input  placeholder='summani kiriting'/>
          <div className='second_price_item'>
            <button onClick={() => setIsOpen (!isOpen)}> <p>so'm</p>
            {!isOpen ? (
            <img src={DownArraw} alt='' />
          ) : (
            <img src={UpArraw} alt="" />
          )}
            </button>
            {
                isOpen && ( <div className='second_first'>
                <ul>
                {
                    rent.map((menu) => (
                        <li key={menu} onClick={() => setIsOpen(false)}>{menu.city}</li>
                    ))
                }
               </ul>
                </div>
            )}          
        </div>
        </div>
    </div>
  )
}

export default Price;