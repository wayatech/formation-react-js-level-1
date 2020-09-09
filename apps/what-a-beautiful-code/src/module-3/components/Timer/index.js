import React from 'react'
import PropTypes from 'prop-types'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { seconds: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }))
  }

  render() {
    const { bgColor } = this.props
    const { seconds } = this.state

    return <div style={{ backgroundColor: bgColor }}>Secondes : {seconds}</div>
  }
}

Timer.propTypes = {
  bgColor: PropTypes.func.isRequired,
}

export default Timer
