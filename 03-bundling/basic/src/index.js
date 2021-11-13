import style from "./css/style.scss";
import logo from "./images/logo.png";
import {hello} from "./components/HelloWorld.ts";

const root = document.getElementById("root");
const h1 = document.createElement("h1");
const image = document.createElement("img");

h1.textContent = hello("TypeScript");
image.src = logo;

root.appendChild(h1);
root.appendChild(image);
