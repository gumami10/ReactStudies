import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      vegetarian: false,
      vegan: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
          </label>
          Female
          <label htmlFor="">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <select
            name={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Sorocaba">Sorocaba</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              onChange={this.handleChange}
              checked={this.state.vegetarian}
            />{" "}
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              onChange={this.handleChange}
              checked={this.state.vegan}
            />{" "}
            Vegan
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.vegan && this.state.vegetarian
            ? `Vegetarian, vegan`
            : this.state.vegan
            ? `Vegan`
            : this.state.vegetarian
            ? `Vegetarian`
            : "None"}
        </p>
      </main>
    );
  }
}

export default App;
