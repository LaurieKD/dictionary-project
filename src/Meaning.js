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
					<strong>For example</strong>: {props.meaning.example}
				</em>
			</p>
			<Synonyms synonyms={props.meaning.synonyms} />
			<br />
			<p>----------</p>
		</div>
	);
}
