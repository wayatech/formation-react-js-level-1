import React from 'react'
import PropTypes from 'prop-types'

function BackgroundSwitch(props) {
  return (
    <>
      <button type="button" onClick={() => props.onClick('green')}>
        Green
      </button>
      <button type="button" onClick={() => props.onClick('red')}>
        Red
      </button>
    </>
  )
}

BackgroundSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default BackgroundSwitch
