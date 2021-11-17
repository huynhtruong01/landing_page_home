import React from 'react'

HeaderNav.propTypes = {}

function HeaderNav({ logo }) {
  return (
    <nav className="nav">
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
        <button className="btn nav__btn">Register</button>
      </div>
    </nav>
  )
}

export default HeaderNav
