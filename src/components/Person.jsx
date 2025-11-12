import { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Timer state
      timer: 0,
    };
    // Interval ID
    this.interval = null;
  }
  // Lifecycle methods to handle timer
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  // Clear interval on unmount
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    //console.log("PROPS : ", this.props);
    return (
      <div>
        {/* Display timer */}
        <h3>Time passed: {this.state.timer} sec</h3>

        {/* Display person details */}
        <h2>{this.props.person.fullName}</h2>
        <img src={this.props.person.imgSrc} alt={this.props.person.fullName} />
        <p>{this.props.person.bio} </p>
        <h4>{this.props.person.profession}</h4>
      </div>
    );
  }
}
