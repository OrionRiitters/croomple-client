import React, { useRef, useState, useEffect } from 'react';
import './Landing.scss';
import Popup from './../popup/Popup';
import Swoop from '../swoop/Swoop';

import api from '../../../services/test';


export default function Landing() {
  const [showPopup, setShowPopup] = useState(true);
  const audioRef = useRef(null);
  useEffect(() => {
    if (!showPopup) {
      audioRef.current.play();
    }
  }, [showPopup])

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="Landing">
      <Popup closePopup={closePopup} showPopup={showPopup} />
      <div className="page-header" onClick={api.test} >
        <h1>Welcome</h1>
        <p>now get OUT</p>
        <Swoop />
        {!showPopup &&
        <audio loop ref={audioRef}>
          <source src="./content/media/headstrunk.mp3" type="audio/mpeg" />
        </audio>
        }
      </div>
    </div>
  );
}