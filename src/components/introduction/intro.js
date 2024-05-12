import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/portfoliopic1.jpg'
const Intro = () => {
  return (
    <section id='section'>
         <div className='intro'>
            <span className='hlo'>Hello,</span>
            <span className='txt'>I'm <span className='name2'>Ajay</span><br/>Front End Web Developer</span>
           <p className="para">I am a skilled front end web developer with 2 years of experience.</p>
        <Link><button className="btn2">Hire me</button></Link>
        
         </div>
         <img src={bg} alt='profile' className='bg'/>
        
    </section>
   
  )
}

export default Intro