import React from 'react';
import './Header.css';

import FlagImage from '../components/assets/Flag_of_Kenya.gif';
import CoatOfArmsImage from '../components/assets/Coat_of_arms.png';

const Header = () => {
  return (
    <header className="header">
      <div className="corner-flags">
        <img src={FlagImage} alt="Flag" className="flag" />
      </div>
      <div className="header-content">
        <img src={CoatOfArmsImage} alt="Coat of Arms" className="coat-of-arms" />
        <h1>Ministry of Foreign and Diaspora Affairs</h1>
      </div>
    </header>
  );
};

export default Header






