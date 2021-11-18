import './App.scss'
import ScrollTop from './components/ScrollTop'
import FooterFeature from './features/Footer'
import HeaderFeature from './features/Header'
import MainFeature from './features/Main'

function App() {
  return (
    <div>
      <HeaderFeature />
      <MainFeature />
      <FooterFeature />
      <ScrollTop />
    </div>
  )
}

export default App
