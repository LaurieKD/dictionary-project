import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
	let [word, setWord] = useState(null);
	let [searchWord, setSearchWord] = useState(false);
	let [phonetic, setPhonetic] = useState(null);

	function handleWordChange(event) {
		event.preventDefault();
		setSearchWord(false);
		setWord(event.target.value);
	}

	function handleReset(event) {
		event.preventDefault();
		setSearchWord(false);
	}

	function search(event) {
		event.preventDefault();
		setSearchWord(true);

		let apiKey = "2335b3c82b10f0343t05f9bo28bfaca3";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
		axios.get(apiUrl).then(showResults);
	}

	function showResults(response) {
		setPhonetic(response.data.phonetic);
		console.log(response.data.phonetic);
	}

	if (searchWord) {
		return (
			<div className="Dictionary">
				<form onSubmit={search}>
					<input
						type="search"
						placeholder="Search for a word"
						onChange={handleWordChange}
						onClick={handleReset}
					/>
				</form>
				<p>You searched for the word {word}</p>
				<p>{phonetic}</p>
			</div>
		);
	} else {
		return (
			<div className="Dictionary">
				<h2>Type a word:</h2>
				<form onSubmit={search}>
					<input
						type="search"
						placeholder="Search for a word"
						autoFocus={true}
						onChange={handleWordChange}
					/>
				</form>
			</div>
		);
	}
}
