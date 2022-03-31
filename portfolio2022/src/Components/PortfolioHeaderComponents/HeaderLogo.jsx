import React from 'react'


//Components
//Styles
import '../../Components-CSS/PortfolioHeaderComponets/HeaderLogo.css';
//Assets
import wilderDevLogo from '../../assets/WilderDev.png'


function HeaderLogo() {
  return (

        <img className = "wilder-dev-logo-header" src={wilderDevLogo} alt="Personal Logo" />
    
  )
}

export default HeaderLogo