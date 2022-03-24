import React from "react";
import ReactDOM from "react-dom";

const str: string = "abc";
interface Person {
  name: string;
  age: number;
}
console.log(str);
const fc = (str: string) => {
  return new Promise((resolve, reject) => {
    resolve({ name: "xiaoming" });
  });
};
const test = fc("1");
console.log("test", test);

interface AppProps {}
interface AppStates {}
class App extends React.Component<AppProps, AppStates> {
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

ReactDOM.render(<App />, document.getElementById("app2"));
