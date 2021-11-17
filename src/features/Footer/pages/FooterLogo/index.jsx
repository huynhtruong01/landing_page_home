import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../../assets/images/logo.png'
import './styles.scss'

FooterLogo.propTypes = {}

function FooterLogo(props) {
  return (
    <div className="footer__logo">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <p>Copyright 2021, All rights reserved.</p>
    </div>
  )
}

export default FooterLogo
