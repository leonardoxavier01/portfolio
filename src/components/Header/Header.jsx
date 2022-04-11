import React from 'react'
import CTA from './CTA'
import './styles.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Leonardo Xavier</h1>
        <h5 className="text-ligth">Desenvolvedor de Software</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header