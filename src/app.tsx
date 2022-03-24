import React from "react";
import ReactDOM from "react-dom";
interface AppProps {}
interface AppStates {}
class App extends React.Component<AppProps, AppStates> {
  state = {
    message: "hello world",
  };
  render() {
    return (
      <div>
        <h2>9999</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
export default App;
