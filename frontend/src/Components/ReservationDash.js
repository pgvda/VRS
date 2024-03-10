import React, { useState, useEffect } from 'react'
import '../Css/ReservationDash.css'
import axios from 'axios';
export default function ReservationDash() {

    const [requests, setRequest] = useState([]);

    useEffect(() => {
        // Fetch customer data from the backend  
        fetchReserDetail();
      }, []);
      async function fetchReserDetail() {
        try {
          const response = await axios.get('http://localhost:8080/request/requests'); // Replace with the correct URL
          setRequest(response.data);
    
        } catch (error) {
          console.error(error);
        }
      }



  return (
    <div>
        <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        <a  class="list-group-item list-group-item-action "  id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
           <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small></a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"> <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small></a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"> <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small></a>


<ul className='requestdash'>
    {requests.map(request=>(
        <li key={request._id}>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"> <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{request.applier}</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">{request.reason}</p>
      <small class="text-body-secondary">To: {request.destination} | Date: {request.date}</small></a>
      </li>
     ))}   
</ul>
     
    
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
      </div>
    </div>
  </div>
  
  </div>
  )
}
