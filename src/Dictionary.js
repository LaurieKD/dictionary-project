import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
	let [word, setWord] = useState(null);
	let [results, setResults] = useState(null);
	let [photos, setPhotos] = useState(null);

	function showResults(response) {
		setResults(response.data);
	}

	function showPhotos(response) {
		setPhotos(response.data.photos);
		console.log(response.data);
	}

	function search(event) {
		event.preventDefault();

		let apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
		axios.get(apiUrl).then(showResults);

		let photoApiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${photoApiKey}`;
		axios.get(photoApiUrl).then(showPhotos);
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
				<Photos photos={photos} />
			</div>
		);
	} else {
		return <div className="Dictionary">{form}</div>;
	}
}
