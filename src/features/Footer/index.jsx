import React from 'react'
import FooterList from './pages/FooterList'
import FooterLogo from './pages/FooterLogo'
import './styles.scss'

FooterFeature.propTypes = {}

function FooterFeature(props) {
  return (
    <footer className="footer container">
      <FooterList />
      <FooterLogo />
    </footer>
  )
}

export default FooterFeature
