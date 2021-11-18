import React, { useState } from 'react'

HeaderNav.propTypes = {}

function HeaderNav({ logo }) {
  const [active, setActive] = useState(false)

  const scrollActive = () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  window.addEventListener('scroll', scrollActive)

  return (
    <nav className={active ? 'nav nav__active' : 'nav'}>
      <div className="container nav__flex">
        <div className="nav__left">
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#">Fractures</a>
            </li>
            <li className="nav__item">
              <a href="#">Service</a>
            </li>
            <li className="nav__item">
              <a href="#">Listed</a>
            </li>
            <li className="nav__item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <button className="btn nav__btn nav__btn--sign-in">Sign in</button>
          <button className="btn nav__btn nav__btn--register">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
