import React, { Component } from 'react'

class About extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }
  componentWillMount() {
    let initialdata

    if (this.props.staticContext) {
      initialdata = this.props.staticContext
    } else {
      initialdata = (window as any).__initialData__
    }
    this.setState({ ...initialdata })
  }

  render() {
    return (
      <div>
        <p>About Page</p>
      </div>
    )
  }
}

export default About
