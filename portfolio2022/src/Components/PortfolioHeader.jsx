import React from 'react'

//Components
import Navbar from './PortfolioHeaderComponents/Navbar';

//Styles
import '../Components-CSS/PortfolioHeader.css';

function PortfolioHeader() {
  return (
    <div className='portfolio--header--container'> 
        <Navbar></Navbar>
    </div>
  )
}

export default PortfolioHeader