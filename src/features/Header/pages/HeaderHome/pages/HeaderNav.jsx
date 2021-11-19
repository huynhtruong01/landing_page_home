import React, { useState } from 'react'

HeaderNav.propTypes = {}

function HeaderNav({ logo }) {
  const [active, setActive] = useState(false)
  const [show, setShow] = useState(false)

  const scrollActive = () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  // show menu
  const showMenu = () => {
    setShow(true)
  }

  // close menu
  const closeMenu = () => {
    setShow(false)
  }

  window.addEventListener('scroll', scrollActive)

  return (
    <nav className={active ? 'nav nav__active' : 'nav'}>
      <div className="container nav__flex">
        <div className="nav__menu" onClick={showMenu}>
          <box-icon
            name="menu-alt-left"
            size="md"
            className="nav__menu"
          ></box-icon>
        </div>
        <div className={show ? 'nav__left nav__show--menu' : 'nav__left'}>
          <div className="nav__close" onClick={closeMenu}>
            <box-icon name="x" type="solid" color="#fff" size="28px"></box-icon>
          </div>
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
