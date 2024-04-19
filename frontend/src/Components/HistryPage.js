import Dashboard from './Dashboard'
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/HistryPageStyle.css";
import Cookies from "js-cookie";

export default function HistryPage() {
  const [requests, setRequests] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  
  useEffect(() => {
    // Retrieve user data from cookie
    const userInfoFromCookie = Cookies.get('userInfo');

    // If user data exists in the cookie, parse it and set the state
    if (userInfoFromCookie) {
        const parsedUserInfo = JSON.parse(userInfoFromCookie);
        const { email } = parsedUserInfo; // Extract name from user data
        setUserEmail(email);
    }
}, []); 
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:8080/request/requests");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);
  const handleButtonClick = (request) => {
    switch(request.driverStatus) {
      case "start":
        // Navigate to location page
        // Replace 'locationPage' with the actual URL of your location page
        window.location.href = 'http://localhost:3001/location-tracker';
        break;
      case "finish":
        // Navigate to feedback page
        // Replace 'feedbackPage' with the actual URL of your feedback page
        window.location.href = '/feedbackPage';
        break;
      default:
        // Navigate to approved page
        // Replace 'approvedPage' with the actual URL of your approved page
        window.location.href = '/approvedPage';
        break;
    }
    
  };

  const handleExpandButtonClick = (requestId) => {
    
    setExpandedRequestId(expandedRequestId === requestId ? null : requestId);
  };

  const calculateApproximateCost = (startTime, endTime, distance) => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const timeDifferenceInMilliseconds = Math.abs(end - start);
    const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

    const costPerKilometer = 10;

    const approximateCost = distance * costPerKilometer * timeDifferenceInHours;

    return isNaN(approximateCost) ? 0 : approximateCost.toFixed(2);
  };
  return (
    <body>

      <div class="row ">

        <div class="columleft">

          <Dashboard />
        </div>
        
        <div class="columnHistory" >
        <h1>History</h1>
          <div className="historyList min-vh-100">
          {requests.map(request => (
            request.applier===userEmail &&(
            <div className="historydetails">
              
                <div className="request-row" key={request._id}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: "100%" }}>
                    
                    <div> {request.date}</div>
                    <div>{request.depatureLocation} to {request.destination}</div>
                   
                    <div>
                    <button className='historyBtn' onClick={() => handleButtonClick(request)}>
  {request.driverStatus === "start" ? "Pending" :
   request.driverStatus   === "finish" ? "Feedback" : 
   request.driverStatus   === "notStart" ? "Approved" :
   request.approveDeenAr   === "false" ? "Reject" : ""}
</button>

                      <button className='historyBtn' onClick={() => handleExpandButtonClick(request._id)}>More</button>
                    </div>
                  </div>
                  {expandedRequestId === request._id && (
                    <div className="expanded-request">
                    <div className='rowticket'>
                      <div className='columnticket1'>
                      <div><label htmlFor="cost"><h1 className='cost'>Approximate Cost:</h1 ></label><h1 className='value'>Rs.{calculateApproximateCost(request.startTime, request.endTime, request.distance)}</h1> </div>
                      <div><label htmlFor="cost"><h1 className='cost'>CO2 Emission:</h1></label> <h1 className='value'>{calculateApproximateCost(request.startTime, request.endTime, request.distance)}g</h1></div>
                    
                        
                      </div>
                      <div className='columnticket2'>
                      <table class=".table-borderless">
 
  <tbody className='cost'>
    <tr >
      
      <td><div><label htmlFor="comeBack">Come Back:</label> </div></td>
      <td><div>{request.comeBack ? "Yes" : "No"}</div></td>
      
    </tr>
    <tr>
     
      <td><div><label htmlFor="reason">Reason:</label> </div></td>
      <td><div>{request.reason}</div></td>
      
    </tr>
    <tr>
      
      <td ><div><label htmlFor="distance">Distance:</label> </div></td>
      <td><div> {request.distance} km </div></td>
    </tr>
    <tr>
      
      <td ><label htmlFor="date">Date:</label></td>
      <td> {request.date}</td>
    </tr>
    <tr>
      
      <td ><div><label htmlFor="Time">Time:</label> </div></td>
      <td> {request.startTime} to {request.endTime}</td>
    </tr>
    <tr>
      
      <td> <div><label htmlFor="Vehcle">Vehicle:</label> </div></td>
      <td>{request.vehicle}</td>
    </tr>
  </tbody>
</table>
                       
                        
                        
                        
                        
                       
                       
                        
                      </div>
                    </div>
                      {/* <div><label htmlFor="time">Time:</label> {${request.startTime} - ${request.endTime}}</div> */}
                       </div>
                  )}
                </div>
              
            </div>
            )
            ))}

          </div>


        </div>


      </div>

    </body>
  )
}