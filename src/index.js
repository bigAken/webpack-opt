import "./index.css";
// import "./test2.less";
import img from "./asset/image/1.png";
console.log(11111);
const imgEl = new Image();
imgEl.src = img;
imgEl.style.height = "120px";
imgEl.style.width = "120px";
imgEl.classList = ["myImg"];

const divEL = document.createElement("div");
const iEL = document.createElement("i");
divEL.className = "hallo ";
iEL.className = "iconfont icon-daishouhuo";
document.body.append(iEL);
document.body.append(imgEl);
document.body.append(divEL);
