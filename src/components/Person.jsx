import { Component } from "react";
import imgP from "../assets/imgPers.jpg";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Person object with details
      person: {
        fullName: "Walid Embeya",
        bio: "Full Stack Developer.",
        imgSrc: imgP,
        profession: "Software engineer",
      },
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
        <h2>{this.state.person.fullName}</h2>
        <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
        <p>{this.state.person.bio} </p>
        <h4>{this.state.person.profession}</h4>
      </div>
    );
  }
}
