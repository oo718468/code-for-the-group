import React from 'react';
import room from "../../assets/images/room.svg"


function Rooms() {
  return (
    <div className='big_rooms'>
        <div className='first_room'>
            <button><img src={room} /> <p>xonalar</p></button>
        </div>
        <div className='second_room'>
            <button><p>1</p></button>
            <button><p>2</p></button>
            <button><p>3</p></button>
            <button><p>4</p></button>
            <button><p>5+</p></button>
        </div>
    </div>
  )
}

export default Rooms