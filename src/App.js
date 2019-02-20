import React from "react";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(status) {
    this.setState(prevState => {
      return {
        isLogged: !status
      };
    });
  }

  render() {
    return (
      <div>
        {!this.state.isLogged ? "You're logged" : "You're not logged"}
        <br />
        <Button
          loggedStatus={this.state.isLogged}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
