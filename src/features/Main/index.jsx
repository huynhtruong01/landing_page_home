import React from 'react'
import MainDescription from './pages/MainDescription'
import MainFeatureOne from './pages/MainFeatureOne'
import MainProcedure from './pages/MainProcedure'
import MainFeatureTwo from './pages/MainFeatureTwo'
import useScroll from '../../hook/useScroll'

MainFeature.propTypes = {}

function MainFeature() {
  return (
    <main className="main">
      <MainProcedure />
      <MainFeatureOne />
      <MainDescription />
      <MainFeatureTwo />
    </main>
  )
}

export default MainFeature
