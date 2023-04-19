import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<p className="What">
				<span className="Part-of-speech">({props.meaning.partOfSpeech})</span> {props.meaning.definition}{" "}
			</p>

			<p className="Example">
				<em>Example: {props.meaning.example}</em>
			</p>
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
