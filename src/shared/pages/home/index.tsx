import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home Page</p>
        <button onClick={() => console.log('clicked')}>click</button>
      </div>
    )
  }
}

export default Home
