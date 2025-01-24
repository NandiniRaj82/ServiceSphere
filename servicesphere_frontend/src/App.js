import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup'; // Import your component
import SignIn from './components/signin';
import HomeScreen from './components/homeScreen'; 
import SignupCategory from './components/signupcategory';
import BuyParts from './components/buypartssignup';
import ServiceProvider from './components/serviceProvidersignin';
import Service from './components/servicepage';
import BuyPartsMain from './components/BuyParts';
import CarServiceFinder from './components/carservicefinder';
import WaterServiceUsers from './components/waterServicefinder';
import ElectricServiceFinder from './components/electricservicefinder';
import SolarServiceFinder from './components/Solarservicefinder';
import CarPartsFinder from './components/CarParts';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path = "/sign-up" element={<Signup />} />
        <Route path = "/category" element = {<SignupCategory />} />
        <Route path = "/buy-parts" element = {<BuyParts />} />
        <Route path = "/service-provide" element = {<ServiceProvider />} />
        <Route path = "/Service" element = {<Service />} />
        <Route path = "/buy-partsMain" element = {<BuyPartsMain />} />
        <Route path = "/car-finder" element = {<CarServiceFinder />} />
        <Route path= "/water-finder" element = {<WaterServiceUsers />} />
        <Route path= "/electric-finder" element = {<ElectricServiceFinder />} />
        <Route path= "/solar-finder" element = {<SolarServiceFinder />} />
        <Route path= "/car-parts" element = {<CarPartsFinder />} />
      </Routes>
    </Router>
  );
}

export default App;
