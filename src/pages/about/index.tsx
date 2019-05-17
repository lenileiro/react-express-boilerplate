import React, { Component } from 'react';

class About extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    let initialdata;

    if (this.props.staticContext) {
      initialdata = this.props.staticContext;
    } else {
      try {
        initialdata = (window as any).__initialData__;
      } catch (ReferenceError) {}
    }
    this.setState({ ...initialdata });
  }

  render() {
    return (
      <div>
        <h1 className="aboutpage">About Page</h1>
      </div>
    );
  }
}

export default About;
