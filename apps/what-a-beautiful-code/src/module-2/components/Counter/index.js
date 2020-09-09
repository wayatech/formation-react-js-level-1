import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    const { bgColor } = this.props
    const { count } = this.state
    return (
      <div style={{ backgroundColor: bgColor }}>
        <p>
          <button
            type="button"
            onClick={() => {
              this.setState((state) => ({
                count: state.count + 1,
              }))
            }}
          >
            Increment
          </button>
        </p>
        <p>Counter : {count}</p>
      </div>
    )
  }
}

Counter.propTypes = {
  bgColor: PropTypes.func.isRequired,
}

export default Counter
