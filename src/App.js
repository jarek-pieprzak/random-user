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
    return (
      <div>
        {this.state.data && this.state.data.results.map(
          user => 
          <Users user = {user} />
        )}
      </div>
    )
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const Users = ({ user }) => (
  <div>
  <br/>
    <div>  
      <img src={user.picture.thumbnail} />
    </div>
    <br/>
    <div>
      {user.name.first.charAt(0).toUpperCase() +
       user.name.first.slice(1) + 
       (' ') + 
        user.name.last.charAt(0).toUpperCase() + 
        user.name.last.slice(1)}
    </div>
    <div>
      {user.email}
    </div>
    <hr/>
  </div>
)

export default App;
