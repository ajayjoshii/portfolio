import React from 'react'
import './skills.css'
import logo from '../../assets/weblogo.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className="title">Mine services</span>
        <span className="desc">I am skilled and passionate web designer and I provide services like website design for company,business,restaurant.</span>
        <div className="bars">
          <div className="bar">
            <img src={logo} alt="" className='imglogo'/>
            <div className="bartext">
              <h2>WEB DESIGN</h2>
              <p>This is a demo of website design</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills