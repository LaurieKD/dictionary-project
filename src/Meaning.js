import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div>
			<p className="What">
				<span className="Part-of-speech">{props.meaning.partOfSpeech}</span>: {props.meaning.definition}{" "}
			</p>
			<p className="Example">
				<em>{props.meaning.example}</em>
			</p>
		</div>
	);
}
