import React, { useState, useEffect } from "react";
import "../Css/PopupDash.css";
import CalendarGfg from "./Calander";

export default function VehiDetails({ vehicle, onClose }) {
  if (!vehicle) {
    return null;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupInner = document.getElementById("popup1");
      if (popupInner && !popupInner.contains(event.target)) {
        // Clicked outside of the popup, close the entire page
        window.close();
      }
    };
  
    // Add event listener to the document body
    document.body.addEventListener("click", handleClickOutside);
  
    // Remove event listener when component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      <div className="popup1">
      <button className="close-button" onClick={onClose}>
                Close
              </button>
        <div className="rowpop">
          <div className="columnpop">
            <div className="popup-inner1">
              <div>
                {vehicle.vehicleImg === "" || vehicle.vehicleImg === null ? (
                  ""
                ) : (
                  <img
                    className="vehiclebutton"
                    src={`data:image/png;base64,${vehicle.vehicleImg}`}
                    alt="Vehicle"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="columnpop">
            <div className="popup-inner1">
              <h2>Vehicle Details</h2>
              {vehicle && (
                <div>
                    <p>Vehicle No: {vehicle.vehicleNo}</p>
                  <p>Vehicle Type: {vehicle.vehicleType}</p>
                  <p>Model: {vehicle.vehicleName}</p>
                  <p>Driver: {vehicle.driverName}</p>
                  <p>Sheets Capacity: {vehicle.sheatCapacity}</p>
                </div>
              )}
              
            </div>
          </div>
        </div>
        <div className="rowpop2">
        <div className="columnpop">
          <div className="popup-inner2">
            <section>
              <CalendarGfg vehicle={vehicle}/>
            </section>
          </div>
        </div>
      </div>
      </div>

      {/* New row for the calendar */}

    </div>
  );
}
