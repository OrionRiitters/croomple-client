import React from 'react';
import './Landing.scss';
import Swoop from '../swoop/Swoop.js';

export default function Landing() {
  return (
    <div className="Landing">
      <div className="page-header">
        <h1>Welcome</h1>
        <p>now get OUT</p>
        <Swoop />
      </div>
    </div>
  );
}