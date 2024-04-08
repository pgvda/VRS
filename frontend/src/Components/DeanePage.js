import React, { useEffect } from "react";
import "../Css/DeanPageStyle.css";
import { useState } from "react";
import { Navigate , useNavigate} from "react-router-dom";


export default function Dean() {

  const [requestData, setRequestData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchRequestData = async () =>{
      try {
  
        const requestResponse = await fetch('http://localhost:8080/request/requests', {
          method : 'GET'
        })
  
        if(requestResponse.ok){
  
          const data = await requestResponse.json()
          console.log(data)
          setRequestData(data)
        }
      } catch (error){
        console.log("Error fetching data :",error)
      }
  
      
    }
    fetchRequestData()
  },[])

  function goToHistoryPage(){
    navigate('/user')
  }
  return (
    <div className="row min-vh-100">
      <div className="column1 ">
        <div className="Dashboard">
          <div>
            
            {requestData && requestData.map(request => (
              <div>
                <li className="request-col" key={request._id}>
                  <a href="/request">
                  <label  className="form-label sidetails">
                    <div className="rowbutton">
                      <div>
                        <div><p>Vehicle :{request.vehicle} <b></b>Distance:{request.distance} </p></div>
                      </div>
                    </div>
                    </label>
                  </a>
                  
                </li>
              </div>
            ))}
              

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
            <label for="ar approved">Assistant Registar Approved</label>
        </div>

        <div className="formdeen">
         
       
        
        </div>
        <div className="checkboxcls">
          <div className="checkgroup">
          <label for="reject">Dean Approved</label>
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
      <div className="column3" style={{ backgroundColor: "#fff" , paddingTop: "100px"}}>
      <button className="deenrequwst">Add Reservation</button>
      <button className="deenrequwst" onClick={goToHistoryPage} >Your History</button>
      <button className="deenrequwst">Proceed</button>
      </div>
    </div>
  );
}
