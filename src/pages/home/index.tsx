import React, { Component } from 'react'

class Home extends Component<any, any> {
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
        <p>Home Page</p>
        <p>{this.state.name}</p>
        <button onClick={() => console.log(this.state)}>click</button>
      </div>
    )
  }
}

export default Home
