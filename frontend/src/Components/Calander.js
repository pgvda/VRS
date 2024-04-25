import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Css/Calender.css';

export default function CalendarGfg({ vehicle }) {
  const [value, onChange] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (vehicle && vehicle.vehicleName) {
      fetchReservations(vehicle.vehicleName);
    }
  }, [vehicle, value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setClickedDate(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchReservations = async (vehicleName) => {
    try {
      if (!vehicle || !vehicle.vehicleName) {
        return; // Exit early if no vehicle is selected
      }
      
      const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Add padding if needed
      const selectedDate = `${value.getFullYear()}-${month}-${value.getDate()}`;
      console.log('Request URL:', `http://localhost:8080/request/requests`);
      console.log('Request Parameters:', { date: selectedDate, vehicle: vehicleName });
      console.log('Selected Date:', selectedDate);
      console.log('Vehicle Name:', vehicleName);
      const response = await axios.get(`http://localhost:8080/request/requests`, {
        params: {
          vehicle: vehicleName,
          date: selectedDate
        }
      });
      const filteredReservations = response.data.filter(reservation => reservation.vehicle === vehicleName);
      setReservations(filteredReservations);
  
      console.log('Fetched reservations for vehicle:', filteredReservations);
  
      const availableSeatsResponse = await axios.get(`http://localhost:8080/availableSeats/getAvailableSeats`, {
        params: {
          date: selectedDate,
          vehicle: vehicleName
        }
      });
      setAvailableSeats(availableSeatsResponse.data.availableSeats);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      console.log('Error response:', error.response); 
    }
  };

  const tileClassName = ({ date }) => {
    const localDate = date.toLocaleDateString('en-US');
   
    const hasReservation = reservations.some(reservation => {
      const reservationDate = new Date(reservation.date).toLocaleDateString('en-US');
      return reservationDate === localDate;
    });
    return hasReservation ? 'reserved-date' : '';
  };

  const onClickDay = (date) => {
    const localDate = date.toLocaleDateString('en-US');
    const clickedReservation = reservations.find(reservation => {
      const reservationDate = new Date(reservation.date).toLocaleDateString('en-US');
      return reservationDate === localDate;
    });
    setSelectedReservation(clickedReservation);
    setClickedDate(date);
    setShowDetails(true);
  };

  return (
    <div className={`calendar-container ${showDetails ? 'show-details' : ''}`}>
      <div className="calendar-column" ref={calendarRef}>
        <Calendar onChange={onChange} value={value} tileClassName={tileClassName} onClickDay={onClickDay} />
      </div>
      <div className="details-column">
        {clickedDate && selectedReservation && (
          <div className="message-box">
            <h2>Reservation Details</h2>
            <p>Date: {selectedReservation.date}</p>
            <p>Available Seats: {availableSeats}</p> {/* Display available seats here */}
            <p>Start From: {selectedReservation.depatureLocation}</p>
            <p>End: {selectedReservation.destination}</p>
            <p>Time Duration: {selectedReservation.startTime} to {selectedReservation.endTime}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}
