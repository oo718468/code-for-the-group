import "./App.css";
import Products from "./components/Products/Main";
import TopNavbar from "./components/TopNavbar/Main";
import BottomNavbar from "./components/BottomNavbar/Main";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Announcement from "./components/Home/Announcement";
import MyProfile from "./components/Home/adminPanel/MyProfile";
import MyNews from "./components/Home/adminPanel/MyNews";
import OurSellers from "./components/Home/adminPanel/OurSellers";
import Massage from "./components/Home/adminPanel/Massage";
import TopUpAccount from "./components/Home/adminPanel/TopUpAccount";
import Saved1 from "./components/Home/adminPanel/Saved";
import Exit from "./components/Home/adminPanel/Exit";
import TypeOfDefinitions from "./components/Home/definitions/TypeOfDefinitions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="topnavbar" element={<TopNavbar />} />
        <Route path="bottomNavbar" element={<BottomNavbar />} />
        <Route path="products" element={<Products />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="myProfil" element={<MyProfile />} />
        <Route path="myNews" element={<MyNews />} />
        <Route path="ourSellers" element={<OurSellers />} />
        <Route path="massage" element={<Massage />} />
        <Route path="topUpAccount" element={<TopUpAccount />} />
        <Route path="saved1" element={<Saved1 />} />
        <Route path="exit" element={<Exit />} />
        <Route path="definitions" element={<TypeOfDefinitions />} />
      </Routes>
    </div>
  );
}

export default App;
