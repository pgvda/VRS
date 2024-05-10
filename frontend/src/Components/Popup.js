import React, { useState } from 'react';
import '../Css/PopUp.css';

const PopUp = ({ onClose }) => {

  var userToken = localStorage.getItem('token')
   // console.log("User Token :", userToken)
    
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
                
              <h1 className='titlepop'>Welcome to Faculty of Engineering
Vehicle Reservations</h1>
<p>Welcome to the web page of the Faculty of Engineering, University of Ruhuna.  We are located in the beautiful coastal city of Galle in the southern province of Sri Lanka.</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
            <div className='columnsign1'>
              <img className="img-logsign" src={require('../Images/logo4.png')} alt="Logo" />
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
