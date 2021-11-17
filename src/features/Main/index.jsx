import React from 'react'
import MainDescription from './pages/MainDescription'
import MainFeatureOne from './pages/MainFeatureOne'
import MainProcedure from './pages/MainProcedure'
import MainFeatureTwo from './pages/MainFeatureTwo'

MainFeature.propTypes = {}

function MainFeature(props) {
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
