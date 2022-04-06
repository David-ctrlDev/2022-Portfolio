import React from 'react'


//Styles
import '../Components-CSS/PortfolioContent.css';
//Assets
import personalPhoto from '../assets/personalPhoto.png'
import backgroundVideo from '../assets/backgroundVideo.mp4'
function Content() {
  return (

   <div className="content-main-container">

		<div className="content-model">
			<img src={personalPhoto} alt="Personal Photgraphy" />
			<video id="myVideo" autoPlay muted loop >
  			<source src={backgroundVideo} type="video/mp4"></source>
			  <source src={backgroundVideo} type="video/ogg"></source>
		</video>
		
		</div>
	
		<div class="main-text">
		
			<h1>Hola! Soy<br/>Wilder Serna</h1>
			<p>Software Developer, autodidacta, 
			   Entusiasta de la ciencia de datos y su aplicación en las industrias</p>
			
		</div>
		

    </div>
    
  )
}

export default Content