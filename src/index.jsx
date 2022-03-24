import React from "react";
import ReactDOM from "react-dom";

const str = "jsx";

console.log(str);
const fc = (str) => {
  return new Promise((resolve, reject) => {
    resolve({ name: "xiaoming" });
  });
};
const test = fc("1");
console.log("test", test);

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    message: "hello world",
  };
  render() {
    return (
      <div>
        <h2>qewwq</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app3"));
