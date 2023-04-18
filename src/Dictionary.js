import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [word, setWord] = useState(null);

	function handleWordChange(event) {
		setWord(event.target.value);
	}

	function search(event) {
		event.preventDefault();
		alert(`Searching for ${word}`);
	}
	return (
		<div className="Dictionary">
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
