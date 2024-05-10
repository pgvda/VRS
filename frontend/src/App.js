import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar';
import OtherUserPage from './Components/OtherUserPage';
import CalendarGfg from './Components/Calander';
import Signin from './Components/SignInPage';
import Dean from './Components/DeanePage';
import ArPage from './Components/ArPage';
import Head from './Components/DepartmentHeadPage';
import Footer from './Components/Footer';
import RequestForm from './Components/VehicleRequestPage';
import VehiDetailPage from './Components/VehicleDetailsPage';
import ReservationDash from './Components/ReservationDash';
import AddNewVehicle from './Components/AddNewVehicle';
import HistryPage from './Components/HistryPage';
import LocationTracker from './Components/LocationTracker'
import FeedbackPage from './Components/FeedbackPage';

function App() {
  return (
    

        
<div className="App">
      <Router>
        <NavBar />
        <Routes >
          <Route path="" exact Component={Signin}/>
          <Route path="/user" element={<HistryPage/>}/>
          <Route path="/dean" element={<Dean/>}/>
          <Route path="/ar" element={<ArPage/>}/>
          <Route path="/head" element={<Head/>}/>
          <Route path="/request" element={<RequestForm/>}/>
          <Route path="/vehidetail" element={<VehiDetailPage/>}/>
          <Route path="/reser" element={<ReservationDash/>}/>
          <Route path='/addvehicle' element={<AddNewVehicle/>}/>
          <Route path='/location-tracker' element={<LocationTracker/>}/>
          <Route path='/user/feedback' element ={<FeedbackPage/>}/>
        </Routes>
     
        <Footer/>
      </Router>
      
    </div>
        

    

  );
}

export default App;
