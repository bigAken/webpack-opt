import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import  "./format";
const str: string = "abc";

console.log(str);
const fc = (str: string) => {
  return new Promise((resolve, reject) => {
    resolve({ name: "xiaoming" });
  });
};
const test = fc("1");
console.log("test", test);



ReactDOM.render(<App />, document.getElementById("app2"));
