import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignInDash() {

    const [vehicles, setItems] = useState([]);

    useEffect(() => {
        // Fetch customer data from the backend  
        fetchVehiDetail();
      }, []);
      async function fetchVehiDetail() {
        try {
          const response = await axios.get('http://localhost:8080/vehicle/vehicles'); // Replace with the correct URL
          setItems(response.data);
    
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div>
        <ol className="Dashboard">
            <h1>Today Available</h1>
            
            {vehicles.map(vehicle=>(
                <li key={vehicle._id}>
                <a href="/vehicle" className="vehilink">
                    <label  className="form-label sidetails">
                        <div className="rowbutton">
                            <div className="columnbuttonleft ">
                                <div>  
                                {vehicle.vehicleImg =="" || vehicle.vehicleImg == null?"" : <img className='vehiclebutton' src={`data:image/png;base64,${vehicle.vehicleImg}`}></img>}
                                </div>         
                            </div>
                            <div className="columnbuttonright "><p>Availabe :{vehicle.availability} <br></br>Available seats:{vehicle.avilableSheat}<br></br>Status:{vehicle.status}</p></div>
                        </div>                
                    </label>
                </a>
            </li>
            ))}
            
        </ol>
    </div>
  )
}
