import getData from "./my-modules.js";
import axios from "axios";

console.log(getData(1).then(res => console.log(res)))