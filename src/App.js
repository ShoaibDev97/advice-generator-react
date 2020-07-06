import React, { Component } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
class App extends Component {
  state = {
    advice: "",
    load: true,
  };

  componentDidMount = () => {
    this.getAdvice();
  };

  getAdvice = async () => {
    this.setState({ advice: "", load: true });

    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => this.setState({ advice: data.slip.advice, load: false }));
  };

  render() {
    return (
      <div className="header">
        <div className="card">
          <p>{this.state.advice}</p>
        </div>

        <button type="button" className="btn" onClick={this.getAdvice}>
          {!this.state.load ? (
            "Generate"
          ) : (
            <Loader type="ThreeDots" color="white" height={20} width={50} />
          )}
        </button>
      </div>
    );
  }
}

export default App;
