import React from 'react'
import logo from '../../../../assets/images/logo.png'
import HeaderNav from './pages/HeaderNav'
import './styles.scss'
import homeImage from '../../../../assets/images/home.png'
import HeaderBody from './pages/HeaderBody'

HeaderHome.propTypes = {}

function HeaderHome(props) {
  return (
    <div className="header__home">
      <div className="container">
        <HeaderNav logo={logo} />
        <HeaderBody homeImage={homeImage} />
      </div>
    </div>
  )
}

export default HeaderHome
