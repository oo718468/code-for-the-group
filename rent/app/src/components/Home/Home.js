import React from 'react'
import Products from '../Products/Products';
import TopNavbar from '../TopNavbar/Main';
import BottomNavbar from '../BottomNavbar/Main';



function Home() {
  return (
    <div>
        <TopNavbar />
        <BottomNavbar />
       <Products />
    
       
    </div>
  )
}

export default Home;