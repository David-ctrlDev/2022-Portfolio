import React from 'react'


//Styles
import '../Components-CSS/PortfolioContent.css';
//Assets
import personalPhoto from '../assets/personalPhoto.png'
function Content() {
  return (

   <div className="content-main-container">

		<div className="content-model">
			<img src={personalPhoto} alt="Personal Photgraphy" />
		</div>
	
		<div class="main-text">
			<h1>Hola!<br/> Soy Wilder Serna</h1>
			<p>Software Developer, autodidacta, apasionado por las TICS
			   Entusiasta de la ciencia de datos y su aplicación en las industrias</p>
			
		</div>
		

    </div>
    
  )
}

export default Content