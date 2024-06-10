import React from 'react'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import facebook from '../assets/fb.png'


function Footer() {
  return (
   
        <div className='footer'>
          <div className="images" >
            <a href='http://www.linkedin.com/in/jayeeta-sadhukhan-b7985b217'>
            <img src={linkedin} alt='linkedin'/>
            </a>
          </div>
         
          <div className="images">
            <a href='https://github.com/Jayeeta22'>
          <img src={github} alt='git'/>
          </a>
          </div>
          <div className="images">
            <a href='https://www.facebook.com/jayeeta.sadhukhan.98'>
            <img src={facebook} alt='fb'/> 
            </a>
          
          </div>
          
    

    </div>
  )
}

export default Footer