import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div>
			<p className="What">
				<span className="Part-of-speech">{props.meaning.partOfSpeech}</span>: {props.meaning.definition}{" "}
			</p>
			<p className="Example">
				<em>
					<strong>Example</strong>: {props.meaning.example}
				</em>
			</p>
			<strong>Synonyms</strong>:
			<Synonyms synonyms={props.meaning.synonyms} />
			<br />
			<p>----------</p>
		</div>
	);
}
