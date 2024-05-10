
import React, {useState, useEffect } from "react";
import axios from "axios";
import "../Css/RequestForm.css";
import Cookies from "js-cookie";
export default function RequestForm() {
    
  const [userEmail, setUserEmail] = useState(null);
  var userToken = localStorage.getItem('token')
   // console.log("User Token :", userToken)

  useEffect(() => {
    // Retrieve user data from cookie
    const userInfoFromCookie = Cookies.get('userInfo');

    // If user data exists in the cookie, parse it and set the state
    if (userInfoFromCookie) {
        const parsedUserInfo = JSON.parse(userInfoFromCookie);
        const { email } = parsedUserInfo; // Extract name from user data
        setUserEmail(email);
    }
}, []); // Run only once after component mount

useEffect(() => {
    // Log user data whenever it changes
    console.log('User Data:', userEmail);
}, [userEmail]); // Run whenever userData changes



    const [date, setdate]=useState("");
    const [startTime, setstartTime]=useState("");
    const [endTime, setendTime]=useState("");
    const [reason, setreason]=useState("");
    const [section, setsection]=useState("");
    const [vehicle, setvehicle]=useState("");
    const [comeBack, setcomeBack]=useState("");
    const [distance, setdistance]=useState("");
    
    const [position, setPosition] = useState("");
    const [depatureLocation, setdepatureLocation] = useState("");
    const [passengerName, setPassengerName] = useState("");
    const [destination, setdestination] = useState("");
    const [pickup, setpickup] = useState("");
    const [drop, setdrop] = useState("");
    const [passengerList, setPassengerList] = useState([]);
    
    const addPassenger = () => {
        const newPassenger = {
          passengerName: passengerName,
          position: position,
          pickup: pickup,
          drop: drop
        };
    
        setPassengerList([...passengerList, newPassenger]);
    
        // Clear input fields after adding a passenger
        setPassengerName("");
        setPosition("");
        setpickup("");
        setdrop("");
      };

      const submitForm = async () => {
        
        try {
          if (comeBack === "") {
            alert("Please select whether you want to come back in the same vehicle or not.");
            return;
          }
          
         
    
          
           // Assuming user data contains the logger name
    
          const currentDate = new Date().toISOString().split('T')[0];

          const formData = {
            
            date:date,
            startTime:startTime,
            endTime:endTime,
            reason:reason,
            section:section,
            comeBack:comeBack,
            vehicle:vehicle,
            distance:distance,
            depatureLocation:depatureLocation,
            destination:destination,
            passengers: passengerList,
            applier: userEmail, // Set applier to current logger's name
            applyDate: currentDate
          };
          
          // Replace the URL with your actual endpoint
          const response = await axios.post("http://localhost:8080/request/addrequest", formData);
          
          // Handle the server response if needed
          console.log("Server Response:", response.data);
    
          
          setdate("");
          setstartTime("");
          setendTime("");
          setreason("");
          setsection("");
          setvehicle("");
          setcomeBack("");
          setdistance("");
          setPassengerList([]);
          alert("Request submitted successfully!");


        } catch (error) {
          
          console.error("Error submitting form:", error);
          alert("Error submitting form. Please try again later.");
        }
      };
  return (
    <form class="vehicleRequestForm" title="Vehicle Request Form" >
    <label for="Vehicle Request Forme" class="form-label"  >Vehicle Request Form </label>
        
            <div class="RequestVehicle">
                <label for="date" class="date">Date :</label>
                <input type="date" class="dateInput" id="date" placeholder ="yyyy-mm-dd" onChange={(a)=>{
                    setdate(a.target.value);
                }}/>

                <label for="vehicleSelect" class="vehicle">Select Vehicle :</label>
                <select id="vehicleSelect" class="vehicleInput" onChange={(a)=>{
                    setvehicle(a.target.value);
                }}>
                    <option>Select</option>
                    <option>Vehicle 1 </option>
                    <option>Vehicle 2</option>
                    <option>Vehicle 3</option>
                    <option>Vehicle 4</option>
                </select>
            </div>

            <div class="RequestVehicle">
                <label for="time" class="startTime">Start Time :</label>
                <input type="time" class="startTimeInput" id="startTime" placeholder ="hh-mm" onChange={(a)=>{
                    setstartTime(a.target.value);
                }}/>
                <label for="time" class="endTime">End Time :</label>
                <input type="time" class="endTimeInput" id="endTime" placeholder ="hh-mm" onChange={(a)=>{
                    setendTime(a.target.value);
                }}/>
            </div>

            <div class="RequestVehicle">
                <label for="sectiondSelect" class="section">Select Section :</label>
                <select id="sectiondSelect" class="selectSectionInput" onChange={(a)=>{
                    setsection(a.target.value);
                }}>
                    <option>Select</option>
                    <option>Administrative</option>
                    <option>Finance</option>
                    <option>Technical Officer</option>
                    <option>Acadamic Staff</option>
                    <option>AR Office</option>
                </select>

                
            </div>
            


        

        <div class="RequestVehicle">
            <label for="reason" class="reason">Reason :</label>
            <input type="text" class="reasonInput" id="reason" placeholder ="Enter Reason For Vehicle Resevation" 
            onChange={(Item)=>{
                setreason(Item.target.value);}}/>
            
        </div>

         <div class="RequestVehicle">
            <label for="depatureFrom" class="depatureLocation">Departure From :</label>
            <input type="text" class="departureFromInput" id="depatureFrom" placeholder ="Enter Depature Location"
            onChange={(Item)=>{
                setdepatureLocation(Item.target.value)}}/>
        </div> 

        <div class="RequestVehicle">
            <label for="destination" class="destinationLocation">Destination :</label>
            <input type="text" class="destinatonInput" id="Destination" placeholder ="Enter Destination Location"
            onChange={(Item)=>{
                setdestination(Item.target.value)}}/>
        </div>

        <div class="RequestVehicle">
            <label for="comeBack" class="comeBack">Do you want to come back in same vehicle</label>
            <input
  class="set-comeback-input"
  type="radio"
  name="setComeBack"
  id="setComeBack1"
  value={true} // Set value to true when selected
  onChange={(a) => {
    setcomeBack(true);
  }}
/>
<label class="set-comeback-label" for="setComeBack1">
  Yes
</label>
<input
  class="set-comeback-input"
  type="radio"
  name="setComeBack"
  id="setComeBack2"
  value={false} // Set value to false when selected
  checked
  onChange={(a) => {
    setcomeBack(false);
  }}
/>
<label class="set-comeback-label" for="setComeBack2">
  No
</label>
        </div> 
        



        <div class="RequestVehicle">
            <label for="approximateDistance" class="distance">Approximate Distance :</label>
            <input type="number" class="approximateDistanceInput" id="approximateDistance" 
            onChange={(Item)=>{
                setdistance(Item.target.value)}}></input>                   
            <span class="approximateDistance">km</span>
        </div>
        <label for="addPassenger" class="addPassenger" >Add Passenger</label>
        <form>

        

        <div class="RequestVehicle">
            <label for="passengerName" class="passengerName">Name :</label>
            <input type="text" class="passengerNameInput" id="passengerName" placeholder ="Enter Passenger Name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}/>
        </div>

        <div class="RequestVehicle">
                <label for="positionSelect" class="position">Select position :</label>
                <select id="positionSelect" class="selectpositionInput" value={position}
          onChange={(e) => setPosition(e.target.value)}>
                    <option>Select</option>
                    <option>Acadamic Staff</option>
                    <option>Non-acadamic staff</option>
                    <option>Student</option>
                </select>
        </div>

        <div class="RequestVehicle">
            <label for="depatureLocation" class="depatureLocation">Pickup Location :</label>
            <input type="text" class="pickupInput" id="pickupLocation" placeholder ="Enter Passenger Pickup Location"
           
            onChange={(e) => setpickup(e.target.value)}/>
        </div>

        <div class="RequestVehicle">
            <label for="destination" class="destination">Drop Location :</label>
            <input type="text" class="dropInput" id="drop" placeholder ="Enter Passenger Drop Location"
            
            onChange={(e) => setdrop(e.target.value)}/>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addPassenger}
        >
          Add Passenger
        </button>

        </form> 
        


         <div>
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Pickup From</th>
              <th scope="col">Drop to</th>
            </tr>
          </thead>
          <tbody>
            {passengerList.map((passenger, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{passenger.name}</td>
                <td>{passenger.position}</td>
                <td>{passenger.pickup}</td>
                <td>{passenger.drop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 

        <button type="submit" class="btn btn-primary submitf" onClick={submitForm}>Submit Form</button>
        </form>
  )
}
