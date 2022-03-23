import "./test.css";
// import "./test2.less";
import img from "./1.png";
console.log(11111);
const imgEl = new Image();
imgEl.src = img;
imgEl.style.height = "120px";
imgEl.style.width = "120px";
imgEl.classList = ["myImg"];

const divEL = document.createElement("div");
divEL.className = "hallo";
document.body.append(imgEl);
document.body.append(divEL);
