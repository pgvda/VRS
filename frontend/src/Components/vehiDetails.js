import React, {useState, useEffect} from "react";
import "../Css/VehiDetails.css"
import Calendar from "react-calendar";
import CalendarGfg from "./Calander";

export default function VehiDetails(){
    var userToken = localStorage.getItem('token')
    //console.log("User Token :", userToken)

    const[Vehicle,setVehicle]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/vehicles")
        .then((response)=>response.json())
        .then((data)=>setVehicle(data))


    })





    return(
        <div className="vehicleDteails">
            <section className="detailSection">

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col" >
                            <div className="vehicleAvilability">
                                <label>Available
                                    <input className="availableCheckBox1" type="checkbox"></input>
                                    <input className="availableCheckBox2" type="checkbox"></input>
                                </label>
                            </div>
                                
                            
                            <div className="vehicleImage">
                                <label className="showVehicleImage"> vehicleImage </label>
                            </div>
                            
                            
                        </div>
                        <div className="col">
                            <div className="vehicleDetailsShow">
                                <label>
                                    Vehicle No :
                                </label>

                            </div>
                            
                            <div>
                                <label className="vehicleDetailsShow">
                                    Driver :
                                    
                                </label>       
                            </div>

                            <div>
                                <label className="vehicleDetailsShow">
                                    Sheat Capacity :
                                </label>
                            </div>

                            <div>
                                <label className="vehicleDetailsShow"> 
                                    Fuel Consumption :
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div className="vehicleDetailsShow"> 
                                <label className="">PX XXXX</label>
                            </div>
                            <div className="vehicleDetailsShow">
                                <label className="">Pathme</label>
                            </div>

                            <div className="vehicleDetailsShow">
                                <label className="">15</label>
                            </div>

                            <div className="vehicleDetailsShow">
                                <label className="">15km/L</label>
                            </div>
                        </div>   
                    </div>        
                </div>    
            </section>
            <p>Some text..</p>
            <section>
                <CalendarGfg/>
            </section>
            

        </div>

        

    )


}