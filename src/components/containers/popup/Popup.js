import React from 'react';
import './Popup.scss';
export default function Popup(props) {
  return (
    <div className={`Popup ${props.showPopup ? '' : 'hide'}`}>
        <h1>Notice:</h1>
        <p>you're not gonna like it</p>
        <div className="btn" onClick={() => props.closePopup()}>
          Okay
        </div>
    </div>
  );
}