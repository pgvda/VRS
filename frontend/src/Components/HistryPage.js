import Dashboard from './Dashboard'
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/HistryPageStyle.css";

export default function HistryPage() {
  const [requests, setRequests] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);

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

        <div class="columLleft">

          <Dashboard />
        </div>
        <div class="column2" >
          <div className="historyList min-vh-100">
          {requests.map(request => (
            <div className="historydetails">
              
                <div className="request-row" key={request._id}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "100%" }}>
                    <div><label htmlFor="start">Start:</label> {request.depatureLocation}</div>
                    <div><label htmlFor="end">End:</label> {request.destination}</div>
                    <div><label htmlFor="vehicle">Vehicle:</label> {request.vehicle}</div>
                    <div><label htmlFor="status">Status:</label> </div>

                    <div>
                      <button className='historyBtn' onClick={() => handleExpandButtonClick(request._id)}>More</button>
                    </div>
                  </div>
                  {expandedRequestId === request._id && (
                    <div className="expanded-request">
                      <div><label htmlFor="comeBack">Come Back:</label> {request.comeBack ? "Yes" : "No"}</div>
                      <div><label htmlFor="depatureLocation">Departure Location:</label> {request.depatureLocation}</div>
                      {/* <div><label htmlFor="time">Time:</label> {${request.startTime} - ${request.endTime}}</div> */}
                      <div><label htmlFor="distance">Distance:</label> {request.distance} km</div>
                      <div><label htmlFor="cost">Approximate Cost:</label> {calculateApproximateCost(request.startTime, request.endTime, request.distance)}</div>
                    </div>
                  )}
                </div>
              
            </div>
            ))}

          </div>


        </div>


      </div>

    </body>
  )
}