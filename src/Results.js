import React from "react";
import "./Results.css";

export default function Results(props) {
	console.log(props.results.phonetic);
	return (
		<div className="Results">
			<p className="Phonetic">/{props.results.phonetic}/</p>
			<p className="What">{props.results.meanings[0].partOfSpeech}</p>
			<p className="Meaning">{props.results.meanings[0].definition}</p>
			<p className="What">Synonyms</p>
			<p className="Example">{props.results.meanings[0].synonyms[0]}</p>
		</div>
	);
}
