import React from 'react'

import Counter from './components/Counter'
import Title from './components/Title'
import BackgroundSwitch from './components/BackgroundSwitch'

class Module2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'white' }
  }

  render() {
    const { color } = this.state
    return (
      <>
        <Title title="This is my counter" />
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
          <Counter bgColor={color} />
        </p>
      </>
    )
  }
}

export default Module2
