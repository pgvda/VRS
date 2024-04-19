// VehicleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Css/VehicelDetails/VehicleList.css'; // Import CSS file for styling
import VehicleaAdd from './VehicleaAdd';
import VehicleUpdate from './VehicleUpdate';
const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/vehicle/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:8080/vehicle/vehiclesdelete/${id}`);
      setVehicles(vehicles.filter(vehicle => vehicle._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  const closeAddModal = () => {
    setShowAddModal(false);
    fetchVehicles(true);
  };
  const openAddModal = () => {
    console.log('Opening Add User modal');
    setShowAddModal(true);

  };
  const openUpdateModal = vehicle => {
    setSelectedVehicle(vehicle);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    fetchVehicles(true);
  };
  return (
    <div className="vehicle-list-container">
      <h1>Vehicle List</h1>
      <button className="add-button" onClick={openAddModal}>Add Vehicle</button>
      <table className="vehicle-table">
        <thead>
          <tr>
          <th></th>
            <th>Vehicle No</th>
            <th>Vehicle Type</th>
            <th>Seat Capacity</th>
            <th>Status</th>
            <th>Driver Name</th>
            <th>DriverEmail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle._id}>
                <td> {vehicle.vehicleImg === "" || vehicle.vehicleImg === null ? "" : <img className='vehicleDe' src={`data:image/png;base64,${vehicle.vehicleImg}`} alt="Vehicle" />}</td>
              <td>{vehicle.vehicleNo}</td>
              <td>{vehicle.vehicleType}</td>
              <td>{vehicle.sheatCapacity}</td>
              <td>{vehicle.status}</td>
              <td>{vehicle.driverName}</td>
              <td>{vehicle.driverEmail}</td>
              <td>
                <button className="update-button" onClick={() => openUpdateModal(vehicle)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(vehicle._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddModal && <VehicleaAdd onClose={closeAddModal}  />} 
      {showUpdateModal && <VehicleUpdate vehicle={selectedVehicle} onClose={closeUpdateModal} />}
    </div>
  );
};

export default VehicleList;
