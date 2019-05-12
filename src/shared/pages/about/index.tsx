import React, { Component } from 'react'

class About extends Component {
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
