import React from 'react'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import './styles.css'
import { useState } from 'react'

const About = () => {
  const data = {
    cardData: [
      {
        id: 1,
        title: 'Experience',
        description: '3+ years working',
        icon: <FaAward className='about__card' />,
      },
      {
        id: 2,
        title: 'Clients',
        description: '200+ worldwide',
        icon: <FiUsers className='about__card' />,
      },
      {
        id: 3,
        title: 'Projects',
        description: '3+ completed',
        icon: <VscFolderLibrary className='about__card' />,
      }
    ]
  }
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          {data.cardData.map((item, index) => {
            return (
              <div className="about__cards">
                <article className='about__card'>
                  {item.icon}
                  <h5>{item.title}</h5>
                  <small>{item.description}</small>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}

export default About