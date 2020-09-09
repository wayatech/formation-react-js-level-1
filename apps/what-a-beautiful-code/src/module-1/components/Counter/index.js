import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    const { count } = this.state
    return (
      <div>
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

export default Counter
