import React from "react";
import "../Css/OtherUserPageStyle.css";
import Dashboard from './Dashboard'
import VehiDetails from './vehiDetails'
import QRCodeComponent from "./QrCodeComponent";

export default function VehiDetailPage(){
    var userToken = localStorage.getItem('token')
    //console.log("User Token :", userToken)

    const vehicleNumber = "NB-2345";
    return(
        <body>

                <div class="row ">
                    
                <div class="columLleft">

                <Dashboard/>
            </div>
                <div class="column2" >
                <VehiDetails/>
                <QRCodeComponent vehicleNumber={vehicleNumber}/>
                    
                </div>
                <div>
                    
                </div>
                    
                
                </div>

        </body>

    )


}
