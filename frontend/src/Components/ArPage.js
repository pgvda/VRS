import React, { useState, useEffect } from "react";
import "../Css/DepartmentHeadPageStyle.css";
import ReservationDash from "./ReservationDash";
import axios from "axios";
import DeenArDash from "./DeenArDash";
export default function ArPage() {
  
  

const [vehicleList, setVehicleList] = useState([]);
const [formData, setFormData] = useState({
  name: "",
  date: "",
  startTime: "",
  endTime: "",
  reason: "",
  section: "",
  vehicle: "",
  comeBack: "",
  comeBackHead: "",
  distance: "",
  depatureLocation: "",
  passengerName: "",
  position: "",
  pickup:"",
  drop:"",
  destination: "",
  passengerList: [], // Initialize passengerList as an empty array
  approveHead: "",
  approveDeenAr:""
});
const [passengerList, setPassengerList] = useState([]);
useEffect(()=>{
  axios.get('http://localhost:8080/vehicle/vehicles')
          .then(response => {
              setVehicleList(response.data); // Assuming response.data is an array of vehicle names
          })
          .catch(error => {
              console.error("Error fetching vehicle list:", error);
          });
}, []);

useEffect(() => {
  const handleForceUpdate = () => {
    // When the custom event is triggered, update the form data
    const requestData = JSON.parse(localStorage.getItem("selectedRequest")) || [];
    
      console.log("Request Data:", requestData);
      setFormData(requestData);
    //////////////////////////////////////////////
    
    setPassengerList(requestData.passengers || []);
  };

  // Listen for the custom event to trigger a re-render
  document.addEventListener('forceUpdateHead', handleForceUpdate);

  return () => {
    // Clean up the event listener on component unmount
    document.removeEventListener('forceUpdateHead', handleForceUpdate);
  };
}, []);



const handleChange = (e) => {
  const { name, value } = e.target;
  // If the field being updated is not "_id", update formData as usual
  if (name !== "_id") {
    setFormData({
      ...formData,
      [name]: value,
    });
  } else {
    // If the field being updated is "_id", preserve the existing _id value
    setFormData({
      ...formData,
      _id: formData._id,
      [name]: value,
    });
  }
};

const addPassenger = () => {
  const newPassenger = {
    passengerName: formData.passengerName,
    position: formData.position,
    pickup: formData.pickup,
    drop: formData.drop
  };
  console.log("New Passenger Details:", newPassenger);
  setPassengerList([...passengerList, newPassenger]);

  // Clear input fields after adding a passenger
  
};
const handleApproveChange = (e) => {
  const value = e.target.value === "true"; // Convert string to boolean
  setFormData({
    ...formData,
    approveDeenAr: value
  });
};
const submitArForm = async () => {
  try {
    if (formData.approveDeenAr === "") {
      alert("Please select whether you accept the request or not.");
      return;
    }

    const formDataWithId = { ...formData, _id: String(formData._id) };
    const response = await axios.put(`http://localhost:8080/request/updateRequest1/${formData._id}`, formDataWithId);
    console.log("Server Response:", response.data);

    setFormData({
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      reason: "",
      section: "",
      vehicle: "",
      comeBack: "",
      comeBackHead: "",
      distance: "",
      depatureLocation: "",
      passengerName: "",
      position: "",
      destination: "",
      passengerList: [],
      approveHead: "",
      approveDeenAr:""
    });

    alert("Request submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form. Please try again later.");
  }
};



  return (
    <div className="row min-vh-100">
      <div className="column1 ">
        <div className="requestbutton">
          <div>
            <DeenArDash />
          </div>
        </div>
      </div>
      <div className="column21" style={{ backgroundColor: "#ccc" }}>


        <div className="formhead">
        <form class="vehicleRequestForm1" title="Vehicle Request Form" >
            <label for="Vehicle Request Forme" class="form-label"  >Vehicle Request Form </label>

            <div class="RequestVehicle">
              <label for="date" class="date">Date :</label>
              <input type="date" class="dateInput" id="date" placeholder="yyyy-mm-dd" value={formData.date}
              onChange={handleChange} />

              <label for="vehicleSelect" class="vehicle">Select Vehicle :</label>
              <select id="vehicleSelect" className="vehicleInput" value={formData.vehicle}
              onChange={handleChange}>
                    <option>Select</option>
                    {/* Mapping over the vehicleList state to populate dropdown options */}
                    {vehicleList.map((vehicle, index) => (
                        <option key={index}>{vehicle.vehicleName}</option>
                    ))}
                </select>
            </div>

            <div class="RequestVehicle">
              <label for="time" class="startTime">Start Time :</label>
              <input type="time" class="startTimeInput" id="startTime"  placeholder="hh-mm" value={formData.startTime}
              onChange={handleChange} />
              <label for="time" class="endTime">End Time :</label>
              <input type="time" class="endTimeInput" id="endTime"  placeholder="hh-mm" value={formData.endTime}
              onChange={handleChange} />
            </div>

            <div class="RequestVehicle">
              <label for="sectiondSelect" class="section">Select Section :</label>
              <select id="sectiondSelect" class="selectSectionInput" value={formData.section}
              onChange={handleChange}>
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
              <input type="text" class="reasonInput" id="reason"  placeholder="Enter Reason For Vehicle Resevation" value={formData.reason}
              onChange={handleChange} />
            </div>

            <div class="RequestVehicle">
              <label for="depatureFrom" class="depatureLocation">Departure From :</label>
              <input type="text" class="departureFromInput" id="depatureFrom"  placeholder="Enter Depature Location"
                value={formData.depatureLocation}
                onChange={handleChange} />
            </div>

            <div class="RequestVehicle">
              <label for="destination" class="destinationLocation">Destination :</label>
              <input type="text" class="destinatonInput" id="Destination"  placeholder="Enter Destination Location"
                value={formData.destination}
                onChange={handleChange}/>
            </div>

            <div class="RequestVehicle">
            <label htmlFor="comeBack">Do you want to come back in same vehicle:</label>
            <input
              type="radio"
              id="comeBack"
              checked={formData.comeBack}
              onChange={() => setFormData({ ...formData, comeBack: true })}
            />
            <label htmlFor="comeBack">Yes</label>
            <input
              type="radio"
              id="notComeBack"
              checked={!formData.comeBack}
              onChange={() => setFormData({ ...formData, comeBack: false })}
            />
            <label htmlFor="notComeBack">No</label>
            </div>

            <div class="RequestVehicle">
              <label for="approximateDistance" class="distance">Approximate Distance :</label>
              <input type="number" class="approximateDistanceInput" id="approximateDistance"
                value={formData.distance}
                onChange={handleChange}></input>
              <span class="approximateDistance">km</span>
            </div>
            <form>



              <div class="RequestVehicle">
                <label for="passengerName" class="passengerName">Name :</label>
                <input type="text" class="passengerNameInput" id="passengerName" placeholder="Enter Passenger Name" name="passengerName"
                  value={formData.passengerName}
                  onChange={handleChange}/>
              </div>

              <div class="RequestVehicle">
                <label for="positionSelect" class="position">Select position :</label>
                <select id="positionSelect" class="selectpositionInput" value={formData.position} name="position"
              onChange={handleChange}>
                  <option>Select</option>
                  <option>Acadamic Staff</option>
                  <option>Non-acadamic staff</option>
                  <option>Student</option>
                </select>
              </div>

              <div class="RequestVehicle">
                <label for="depatureLocation" class="depatureLocation">Pickup Location :</label>
                {/* <input type="text" class="depatureLocationInput" id="depatureLocation" placeholder="Enter Passenger Pickup Location" */}
                <input type="text" class="passengerNameInput" id="passengerName" placeholder="Enter Passenger Name" name="pickup"
                  value={formData.pickup}
                  onChange={handleChange} />
              </div>

              <div class="RequestVehicle">
                <label for="destination" class="destination">Drop Location :</label>
                <input type="text" class="destinationInput" id="destination" placeholder="Enter Passenger Drop Location" name="drop"
                  value={formData.drop}
                  onChange={handleChange} />
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
              <td>{index+1}</td>
              <td>{passenger.position}</td>
              <td>{passenger.position}</td>
              <td>{passenger.pickup}</td>
              <td>{passenger.drop}</td>
            </tr>
          ))}
                </tbody>
              </table>
            </div>
            <div class="RequestVehicle">
              <div className="columncheck1">
              <span className="tabbed-text">Head Approved</span>
                                        {formData.approveHead === true ? (
                                            <img src={require('../Images/yes1.png')} alt="Yes" style={{ color: 'green', width: '24px', height: '24px' }} />
                                        ) : (
                                            <img src={require('../Images/no4.png')} alt="No" style={{ width: '24px', height: '24px' }} />
                                        )} <br />
              </div>
              <div className="columncheck1">
              <label for="approve" class="approve">The Request is </label>
              <input
                class="set-approve-input"
                type="radio"
                name="setApprove"
                id="setApprove1"
                value={true}
                checked={formData.approveDeenAr === true}
                onChange={handleApproveChange}
              />
              <label class="set-approve-label" for="setApprove1">
                Approved
              </label>
              <input
                class="set-approve-input"
                type="radio"
                name="setApprove"
                id="setApprove2"
                value={false}
                checked={formData.approveDeenAr === false}
                onChange={handleApproveChange}
              />
              <label class="set-approve-label" for="setApprove2">
                Rejected by Ar
              </label>
              </div>
              
              <button type="submit" class="btn btn-primary submitf" onClick={submitArForm} >Proceed</button>

            </div>
            <div class="RequestVehicle">

           
            </div>


          </form>



        </div>
        

      </div>
      <div className="column3" style={{ backgroundColor: "#fff" }}>
        <button className="deenrequwst">Add Reservation</button>
        <button className="deenrequwst">Your History</button>
        <button className="deenrequwst">Proceed</button>
      </div>
    </div>
  );
}
