import React, { useState } from 'react';
import '../Css/PopUp.css';

const PopUp = ({ onClose }) => {
    
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className='rowsign'>
          {/* Slide 1 */}
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
            <div className='columnsign1'>
              <img className="img-logsign" src={require('../Images/logo4.png')} alt="Logo" />
            </div>
            <div className='columnsign2'>
                
              <h1 className='titlepop'>Welcome to Faculty of Engineering<br/>
Vehicle Reservations</h1>
<p> Software aims to streamline vehicle reservations, reduce unnecessary expenses, and enhance overall efficiency within the faculty</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
            <div className='columnsign1'>
              <img className="img-logsign" src={require('../Images/green.png')} alt="Logo" />
            </div>
            <div className='columnsign2'>
              <h1 className='titlepop'>Slide 2</h1>
            </div>
          </div>
          {/* Slide 3 */}
          <div className={`slide ${currentSlide === 3 ? 'active' : ''}`}>
            <div className='columnsign1'>
              <img className="img-logsign" src={require('../Images/logo4.png')} alt="Logo" />
            </div>
            <div className='columnsign2'>
              <h1 className='titlepop'>Slide 3</h1>
            </div>
          </div>
        </div>
        {/* Slide buttons */}
        <div className="slide-buttons">
          <button className="slide-button" onClick={handlePreviousSlide}>Previous</button>
          <button className="slide-button" onClick={handleNextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
