import React from 'react'

//Components
import Navbar from './PortfolioHeaderComponents/Navbar';
import HeaderLogo from './PortfolioHeaderComponents/HeaderLogo';

//Styles
import '../Components-CSS/PortfolioHeader.css';

function PortfolioHeader() {
  return (
    <div className='portfolio--header--container'> 
        <HeaderLogo></HeaderLogo>
        <Navbar></Navbar>
    </div>
  )
}

export default PortfolioHeader