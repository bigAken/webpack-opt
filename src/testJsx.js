import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world",
    };
  }
  render() {
    return (
      <div>
        <h2>qewwq</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
