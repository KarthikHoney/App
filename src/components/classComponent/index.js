import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Component constructed');
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 9) {
          clearInterval(this.interval);
          console.log('Count reached 10, interval cleared');
        }
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);

    console.log('Component mounted');
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
    console.log('Component will unmount');
  }

  render() {
    console.log('Component rendered');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default MyComponent;
