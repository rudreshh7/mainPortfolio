import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <>
    <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Rudresh Jha
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <a className='navName' href="https://github.com/rudreshh7" target="_blank"> <span className='navSpan'>Github</span> </a>
          <a className='navName' href="https://drive.google.com/u/0/uc?id=16H8lUHitGSqiRKurcYtUWn79ch4hXq1I&export=download" target="_blank"><span className='navSpan'>Resume</span></a>
          <a className='navName' href="https://www.linkedin.com/in/rudreshh7/" target="_blank"><span className='navSpan'>Project</span></a>
          <a className='navName' href="https://www.linkedin.com/in/rudreshh7/" target="_blank"><span className='navSpan'>Linkedin</span></a>
          <a className='navName' href="mailto: kumarrudresh5@gmail.com" target="_blank"><span className='navSpan'>Email Me</span></a>
        </div>
      </div>
   </>
  )
}

export default Navbar