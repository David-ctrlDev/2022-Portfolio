import React from 'react'

//Styles
import '../../Components-CSS/PortfolioHeaderComponets/Navbar.css';


function Navbar() {
  return (
    <div className='navbar-container'>
        <nav>
            <ul>
                <li >
                    <a href="/#" isActive>About Me</a>
                </li>
                <li isActive>
                    <a href="/#" isActive>Experience</a>
                </li>
                <li>
                    <a href="/#" isActive>Proyects</a>
                </li>
                <li>
                <a href="/#" isActive>Contact</a>
                </li>
            </ul>

        </nav>

    </div>
  )
}

export default Navbar