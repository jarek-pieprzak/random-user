import React, { Component } from "react";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    fetch("https://randomuser.me/api?results=5")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div>{this.state.data && JSON.stringify(this.state.data)}</div>;
  }
}

export default App;
