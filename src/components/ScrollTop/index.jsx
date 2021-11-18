import React, { useState } from 'react'
import './styles.scss'
import 'boxicons'

ScrollTop.propTypes = {}

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  console.log(visible)

  return (
    <div className={visible ? 'scroll_top visible' : 'scroll_top'}>
      <button onClick={scrollToTop}>
        <box-icon
          type="solid"
          name="chevron-up"
          color="white"
          size="sm"
        ></box-icon>
      </button>
    </div>
  )
}

export default ScrollTop
