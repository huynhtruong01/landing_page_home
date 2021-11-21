import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { navItem } from '../../../../../animation/Animation'

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
            <motion.li
              className="nav__item"
              initial={navItem.from}
              animate={navItem.to}
              transition={{ type: 'tween', delay: 0.15 * 1, duration: 0.3 }}
            >
              <a href="#">Home</a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={navItem.from}
              animate={navItem.to}
              transition={{ type: 'tween', delay: 0.15 * 2, duration: 0.3 }}
            >
              <a href="#">Fractures</a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={navItem.from}
              animate={navItem.to}
              transition={{ type: 'tween', delay: 0.15 * 3, duration: 0.3 }}
            >
              <a href="#">Service</a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={navItem.from}
              animate={navItem.to}
              transition={{ type: 'tween', delay: 0.15 * 4, duration: 0.3 }}
            >
              <a href="#">Listed</a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={navItem.from}
              animate={navItem.to}
              transition={{ type: 'tween', delay: 0.15 * 5, duration: 0.3 }}
            >
              <a href="#">Contact</a>
            </motion.li>
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
