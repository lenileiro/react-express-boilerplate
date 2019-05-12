import React, { Component } from 'react'

class About extends Component {
  constructor(props: any) {
    super(props)

    let initialdata

    if (props.staticContext) {
      initialdata = props.staticContext
    } else {
      initialdata = (window as any).__initialData__
    }

    this.state = {
      ...initialdata
    }
  }

  render() {
    return (
      <div>
        <p>About Page</p>
        <button onClick={() => console.log('clicked')}>click</button>
      </div>
    )
  }
}

export default About
