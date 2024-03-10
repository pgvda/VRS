import React from "react";
import "../Css/DeanPageStyle.css";

export default function ArPage() {
  return (
    <div className="row min-vh-100">
      <div className="column1 ">
        <div className="requestbutton">
          <div>
          <ol className='vehiDetails '>
                <h1>Reservations</h1>
                  <li><label  className="form-label details">Request 1</label></li>
                  <li><label  className="form-label details">Request 2</label></li>
                  <li><label  className="form-label details">Request 3</label></li>
                  <li><label  className="form-label details">Request 4</label></li>  
                </ol>
          </div>
        </div>
      </div>
      <div className="column2" style={{ backgroundColor: "#ccc" }}>
        <div>
          <input
            type="radio"
            id="ar approved"
            name="fav_language"
            value="AR Approved"
          />
            <label for="ar approved">Department Head Approved</label>
        </div>

        <div className="formdeen">
         
       
        
        </div>
        <div className="checkboxcls">
          <div className="checkgroup">
          <label for="reject">Assistant Registar Approved</label>
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
