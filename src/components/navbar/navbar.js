import React from 'react'
import '../navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
         <div>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desk">Home</Link>
       <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menu_item">About</Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="menu_item">Portfolio</Link>
       <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="menu_item">Projects</Link>

    </div>
    <button className="menubtn" onClick={()=>{
      document.getElementById('contact')
    }}>contact me</button>
    </nav>
   
  )
}

export default Navbar