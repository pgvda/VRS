import React from "react";
import "../Css/DeanPageStyle.css";
import ReservationDash from "./ReservationDash";

export default function Head() {
  var userToken = localStorage.getItem('token')
   // console.log("User Token :", userToken)
  return (
    <div className="row min-vh-100">
      <div className="column1 ">
        <div className="requestbutton">
          <div>
          <ReservationDash/>
          </div>
        </div>
      </div>
      <div className="column2" style={{ backgroundColor: "#ccc" }}>
        

        <div className="formdeen">
         
       
        
        </div>
        <div className="checkboxcls">
          <div className="checkgroup">
          <label for="reject">Head of Department Approved</label>
          <input
            className="chekbox"
            type="radio"
            id="reject"
            name="fav_language"
            value="Reject"
          />
          </div>
          
          <div className="checkgroup">
          <label for="reject">Reject</label>
          <input
            className="chekbox"
            type="radio"
            id="reject"
            name="fav_language"
            value="Reject"
          />
          </div>
          
          
        </div>
        <div>
        <button className="proceeedbutton">Proceed</button>
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
