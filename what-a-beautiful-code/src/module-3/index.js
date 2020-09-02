import React from 'react'

import Timer from './components/Timer'
import Title from './components/Title'
import BackgroundSwitch from './components/BackgroundSwitch'

class Module3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'white' }
  }

  render() {
    const { color } = this.state

    return (
      <>
        <Title title="This is my timer" />
        <p>
          <BackgroundSwitch
            onClick={(c) => {
              this.setState({
                color: c,
              })
            }}
          />
        </p>
        <p>
          <Timer bgColor={color} />
        </p>
      </>
    )
  }
}

export default Module3
