import React from 'react'
import './about.css';
import Award from '../../img/award.png'
export const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='a-img' />
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident iste tempore ad iusto.</p>

        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum temporibus assumenda voluptates voluptate vel atque, laborum aliquid quaerat mollitia, aliquam at reprehenderit molestias obcaecati cumque. Consectetur, harum! Perspiciatis, dolor nesciunt.
        </p>
        <div className="a-award">
          <img src={Award} alt="award" className='a-award-img' />
          <div className="a-award-text">
            <h4 className='a-award-title'>international Design Award 2022</h4>
            <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora,</p>
          </div>
        </div>
      </div>
    </div>
  )
}
