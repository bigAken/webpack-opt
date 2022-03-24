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

const test = () => console.log(1111);
// polyfill
const tempArr = [1, undefined, null, false, 0, 2, 3, 1, 2, 2, 3];
const filter = tempArr.filter(Boolean);
console.log("filter", filter);
