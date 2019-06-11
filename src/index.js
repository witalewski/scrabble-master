import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getValidPermutations } from "./utils/getValidPermutations";
import { getPermutations } from "./utils/getPermutations";
import { isValidWord } from "./utils/isValidWord";

window.getValidPermutations = getValidPermutations;
window.getPermutations = getPermutations;
window.isValidWord = isValidWord;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
