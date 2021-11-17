import React from 'react'
import HeaderClient from './pages/HeaderClient'
import HeaderHome from './pages/HeaderHome'
import './styles.scss'

HeaderFeature.propTypes = {}

function HeaderFeature(props) {
  return (
    <header className="header">
      <HeaderHome />
      <HeaderClient />
    </header>
  )
}

export default HeaderFeature
