import React, {useState} from "react";
import axios from "axios";

export default function AddNewVehicle(){

    const [vehicleNo, setVehicleNo]=useState("");
    const [vehicleType,setVehicleType]=useState("");
    const [sheatCapacity,setSheatCapacity]=useState("");
    const [avilableSheat,setAvilableSheat]=useState("");
    const [driverName,setDriverName]=useState("");
    const [vehicleImg,setVehicleImg]=useState("");

    function convertToBase64(e){
        if (e.target.files.length > 0) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
              setVehicleImg(reader.result.split(",")[1]); // Set only the base64 data
            };
            reader.onerror = (error) => {
              console.log("Error", error);
            };
          }
          console.log(e);
        }

    function sendVehicleData(e){
        e.preventDefault();

        const addNewVehicle={
            vehicleNo,
            vehicleType,
            sheatCapacity,
            avilableSheat,
            driverName,
            vehicleImg
        }

        axios.post("http://localhost:8080/vehicle/addVehicle",addNewVehicle).then(()=>{

            alert("new vehicla added")
        }).catch((err)=>{
            console.error("error",err)
            alert("error with add new vehicle",err)
            console.log(vehicleImg)
        })
    }
    return(
        <body>
            <form onSubmit={sendVehicleData}>

                <div>
                    <h1>vehicle</h1>
                </div>
                <div>
                    <h1>vehicle</h1>
                </div>
                <div>
                    <h1>vehicle</h1>
                </div>
                <div>
                    <h1>vehicle</h1>
                </div>

            <div>
            <label>Vehicle NO:</label>

            <input type="text" id="vehicleNo" className="form-contral" onChange={(e)=>{
                setVehicleNo(e.target.value);
            }}></input>
            </div>

            <div>
            <label>Vehile Type</label>
            <input type="text" id="vehicleType" className="form-contral" onChange={(e)=>{
                setVehicleType(e.target.value);
            }}></input>
            </div>

            <div>
            <label>Sheat Capacity</label>
            <input type="Number" id="sheatCapacity" className="form-contral" onChange={(e)=>{
                setSheatCapacity(e.target.value);
            }}></input>
            </div>

            <div>
            <label>Available Sheat</label>
            <input type="Number" id="avilableSheat" className="form-contral" onChange={(e)=>{
                setAvilableSheat(e.target.value);
            }}></input>
            </div>

            <div>
            <label>Driver Name</label>
            <input type="text" id="driverName" className="form-contral" onChange={(e)=>{
                setDriverName(e.target.value);
            }}></input>
            </div>

            {/* <div>
            <label>image</label>
            <input type="file"/>
            </div>

            <div>
            <label>image</label>
            <input type="file"></input>
            </div> */}




            <div>
            <label>image</label>
            <input type="file" className="form-control" id="vehicleImg" accept="image/*" onChange={convertToBase64}></input>
            {vehicleImg =="" || vehicleImg == null?"" : <img className="vehiclebutton" src={`data:image/png;base64,${vehicleImg}`}></img>}
            </div>

            <div>
                <button type="submit">submit</button> 
            </div>
        </form>
        </body>

    )
}