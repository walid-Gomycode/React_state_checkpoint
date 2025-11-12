import { Component } from "react";
import "./App.css";
import Person from "./components/Person";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Toggle state for showing/hiding Person component
      shows: false,
    };
  }
  handleToggle = () => this.setState({ shows: !this.state.shows });
  render() {
    //console.log(this.state.shows)
    return (
      <div className="App">
        <h1>Check State</h1>
        <button onClick={this.handleToggle}>
          {this.state.shows ? "Hide" : "Show"}
        </button>
        {this.state.shows && <Person />}    
      </div>
    );
  }
}
