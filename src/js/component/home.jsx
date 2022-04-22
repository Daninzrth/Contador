import React from "react";

//include images into your bundle
import "../../styles/index.css";
import { pause, play, reset } from "../index.js";
//create your first component

const Home = (props) => {
	let numeros = props.segundos.toString();
	return (
		<div
			className="contador d-flex justify-content-center mx-5 rounded"
			style={{ fontSize: "60px" }}>
			<div
				className="my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				<i class="far fa-clock"></i>
			</div>
			<div
				id="num"
				className="centenamil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 6]
					? numeros[numeros.length - 6]
					: "0"}
			</div>
			<div
				id="num"
				className="decenamil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 5]
					? numeros[numeros.length - 5]
					: "0"}
			</div>
			<div
				id="num"
				className="mil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 4]
					? numeros[numeros.length - 4]
					: "0"}
			</div>
			<div
				id="num"
				className="mil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 3]
					? numeros[numeros.length - 3]
					: "0"}
			</div>
			<div
				id="num"
				className="mil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 2]
					? numeros[numeros.length - 2]
					: "0"}
			</div>
			<div
				id="num"
				className="mil my-4 mx-3 px-4 rounded"
				style={{ backgroundColor: "#fff0f5", opacity: "0.5" }}>
				{numeros[numeros.length - 1]
					? numeros[numeros.length - 1]
					: "0"}
			</div>
			<div
				className="button d-flex flex-column my-4"
				style={{ fontSize: "30px", opacity: "0.7" }}>
				<button
					onClick={() => {
						play();
					}}>
					<i class="far fa-play-circle"></i>
				</button>
				<button
					onClick={() => {
						pause();
					}}>
					{" "}
					<i class="far fa-pause-circle"></i>
				</button>
				<button
					onClick={() => {
						reset();
					}}>
					<i class="fas fa-redo"></i>
				</button>
			</div>
		</div>
	);
};

export default Home;
