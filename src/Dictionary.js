import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [word, setWord] = useState(null);
	let [results, setResults] = useState(null);

	function showResults(response) {
		setResults(response.data);
		console.log(response.data);
	}

	function showPhotos(response) {
		console.log(response);
	}

	function search(event) {
		event.preventDefault();

		let apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
		axios.get(apiUrl).then(showResults);

		let pexelsApiKey = "kJ8DBHEjyQ5CwJNgc4CdSB5HY1Gj47oS2lwoAb3iaqn6KFWeE37yavPT";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(showPhotos);
	}

	function handleWordChange(event) {
		setWord(event.target.value);
	}

	let form = (
		<div className="Dictionary">
			<form
				className="Search"
				onSubmit={search}
			>
				<input
					type="search"
					placeholder="Search for a word"
					className="Search-input"
					onChange={handleWordChange}
				/>
			</form>
		</div>
	);

	if (results) {
		return (
			<div className="Dictionary">
				{form}

				<Results results={results} />
			</div>
		);
	} else {
		return <div className="Dictionary">{form}</div>;
	}
}
