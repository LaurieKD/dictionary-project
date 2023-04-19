import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
	console.log(props.results.phonetic);
	return (
		<div className="Results">
			<span className="Word">{props.results.word}</span>
			<p className="Phonetic">/'{props.results.phonetic}/</p>
			{props.results.meanings.map(function (meaning, index) {
				return (
					<div key={index}>
						<Meaning meaning={meaning} />
					</div>
				);
			})}
		</div>
	);
}
