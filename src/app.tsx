import React from "react";
import img from "@asset/image/1.png";
import  './index.css'

interface AppProps {}
interface AppStates {}
class App extends React.Component<AppProps, AppStates> {
  state = {
    message: "hello world",
  };
  render() {
    return (
      <div>
        <h2 className="test">9999</h2>
        <p>{this.state.message}</p>
        <img src={img} alt="" />
      </div>
    );
  }
}
export default App;
