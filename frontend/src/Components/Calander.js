import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Css/Calender.css';

///

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [messageBoxPosition, setMessageBoxPosition] = useState({ top: 0, left: 0 });
  useEffect(() => {
    fetch('http://localhost:8080/request/requests')
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.error('Error fetching reservations:', error));
  }, []);

  const tileClassName = ({ date }) => {
    const formattedDate = new Date(date);
    const localDate = formattedDate.toLocaleDateString('en-US');

    const hasReservation = reservations.some(reservation => {
      const reservationDate = new Date(reservation.date).toLocaleDateString('en-US');
      return reservationDate === localDate;
    });

    return hasReservation ? 'reserved-date' : '';
  };

  const onClickDay = date => {
    const formattedDate = new Date(date);
    const localDate = formattedDate.toLocaleDateString('en-US');

    const clickedReservation = reservations.find(reservation => {
      const reservationDate = new Date(reservation.date).toLocaleDateString('en-US');
      return reservationDate === localDate;
    });

    setSelectedReservation(clickedReservation);

    const rect = event.target.getBoundingClientRect();
    setMessageBoxPosition({
      top: rect.bottom + window.scrollY + 5, // Adjust the top position as needed
      left: rect.left + window.scrollX, // Adjust the left position as needed
    });
  };


  return (
    <div>
      <Calendar onChange={onChange} value={value} tileClassName={tileClassName} onClickDay={onClickDay} />

      {selectedReservation && (
        <div className="message-box" style={{ top: messageBoxPosition.top, left: messageBoxPosition.left }}>
          <h2>Reservation Details</h2>
          <p>Date: {selectedReservation.date}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}
