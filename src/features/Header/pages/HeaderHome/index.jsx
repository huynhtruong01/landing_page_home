import React from 'react'
import logo from '../../../../assets/images/logo.png'
import HeaderNav from './pages/HeaderNav'
import './styles.scss'
import homeImage from '../../../../assets/images/home.png'
import HeaderBody from './pages/HeaderBody'
import useScroll from '../../../../hook/useScroll'

HeaderHome.propTypes = {}

function HeaderHome(props) {
  const [element, controls] = useScroll()
  return (
    <div className="header__home" ref={element}>
      <HeaderNav logo={logo} animateCustom={controls} />
      <div className="container">
        <HeaderBody homeImage={homeImage} animateCustom={controls} />
      </div>
    </div>
  )
}

export default HeaderHome
