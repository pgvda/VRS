import React, { useState, useEffect } from 'react'
import '../Css/ReservationDash.css'
import axios from 'axios';
export default function DeenArDash() {

    const [requests, setRequest] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    useEffect(() => {
        // Fetch customer data from the backend  
        fetchReserDetail();
      }, []);
      async function fetchReserDetail() {
        try {
          const response = await axios.get('http://localhost:8080/request/requests'); // Replace with the correct URL
          const filteredRequests = response.data.filter(request => !request.approveDeenAr && request.approveHead);
          setRequest(filteredRequests);
    
        } catch (error) {
          console.error(error);
        }
      }

      function handleItemClick(request) {
        localStorage.setItem('selectedRequest', JSON.stringify(request));
        document.dispatchEvent(new Event('forceUpdateHead'));
      }

  return (
    <div>
        <div class="row">
    <div class="col-4">
      <div class="list-group" id="list-tab" role="tablist">
        
        
        



<ul className='requestdash'>
    {requests.map(request=>(
        <li key={request._id}>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings" onClick={() => handleItemClick(request)}> <div class="d-flex w-100 justify-content-between">
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
    
  </div>
  
  </div>
  )
}
