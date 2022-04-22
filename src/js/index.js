//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Home from "./component/home.jsx";

//import your own components

//render your react application
let counter = 0;
let isPaused = false;
setInterval(function () {
	ReactDOM.render(
		<Home segundos={counter} />,
		document.querySelector("#app")
	);
	if (!isPaused) {
		counter++;
	}
}, 1000);

function pause() {
	isPaused = true;
}
function play() {
	isPaused = false;
}
function reset() {
	counter = 0;
}

export { pause, play, reset };
