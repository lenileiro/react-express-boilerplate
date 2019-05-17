import React, { Component } from 'react'

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    let initialdata

    if (this.props.staticContext) {
      initialdata = this.props.staticContext
    } else {
      try {
        initialdata = (window as any)
          .__initialData__(window as any)
          .__initialData__.replace(/</g, '\\u003c')
      } catch (ReferenceError) {}
    }
    this.setState({ ...initialdata })
  }

  componentDidMount() {
    ;(window as any).__initialData__.replace(/</g, '\\u003c')
  }

  render() {
    return (
      <div>
        <p className="homepage">Home Page</p>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default Home
