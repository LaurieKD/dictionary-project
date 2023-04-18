import React from "react";

export default function Results(props) {
	console.log(props.results.phonetic);
	return <div className="Results">hello {props.results}</div>;
}
