import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	let [word, setWord] = useState(null);
	let [searchWord, setSearchWord] = useState(false);
	let [results, setResults] = useState(null);
	let [phonetic, setPhonetic] = useState(null);
	let [meaning, setMeaning] = useState(null);

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
		setMeaning(response.data.meanings[0].definition);
		setResults(response.data);
		console.log(response.data);
		console.log(response.data.phonetic);
		console.log(response.data.meanings[0].definition);
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
					onClick={handleReset}
				/>
			</form>
		</div>
	);

	if (searchWord) {
		return (
			<div className="Dictionary">
				{form}

				<p>
					You searched for the word <span className="Word">{word}</span>
				</p>
				<p>{meaning}</p>
				<p>{phonetic}</p>
				<Results results={results} />
			</div>
		);
	} else {
		return <div className="Dictionary">{form}</div>;
	}
}
