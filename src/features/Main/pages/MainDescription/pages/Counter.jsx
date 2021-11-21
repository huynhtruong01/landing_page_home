import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { animate } from 'framer-motion'

Counter.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
}

function Counter({ from = 0, to }) {
  const number = useRef()
  useEffect(() => {
    const node = number.current
    const controls = animate(from, to, {
      duration: 1.25,
      onUpdate(value) {
        node.textContent = value.toFixed(0)
      },
    })

    return () => controls.stop()
  }, [from, to])
  return <span ref={number} />
}

export default Counter
