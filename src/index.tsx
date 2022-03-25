import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
document.getElementById("app2")?.addEventListener("click", () => {
  console.log("www");
  // 魔法注释（magic comments）
  import(
    /* webpackChunkName:'format' */
    /* webpackPrefetch: true */
    "./format"
  ).then((res) => {
    console.log(res);
    console.log(11111);
  });
});

ReactDOM.render(<App />, document.getElementById("app2"));
