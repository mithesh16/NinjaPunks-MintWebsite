import React from 'react'
import "./team.css"
import githublogo from "../../images/social-media-icons/github.png"
import linkedinlogo from "../../images/social-media-icons/linkedin.png"
import Profile from "../../images/mithesh2.jpeg"
const Team = () => {
  return (
   
  <div className='team'>
    <div className="containers">
      <hr/>
        <h1 className='head'>Meet our Team</h1>
     <br/>
          <div className='devs'>
            <div className='dev'>
              <img src={Profile} className="profile-img" alt="profilepic"/>
              <h3 className='username'>Mithesh</h3>
              <h5>Full stack developer</h5>
            <div className='logos' >
            <a href='https://github.com/mithesh16'  target="_blank" rel="noreferrer" >
              <img className='logos' src={githublogo} alt="githublogologo"/>
             </a>
             <a href='https://www.linkedin.com/in/mithesh-srinivasan/' target="_blank" rel="noreferrer">
              <img className='logos' src={linkedinlogo} alt="linkedinlogo"/>
             </a>
            </div>
        
            </div>

    </div>
  </div>
  </div>

  )
}

export default Team
