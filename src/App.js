import dictionaryLogo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
	return (
		<div className="container App">
			<header className="App-header">
				<img
					src={dictionaryLogo}
					alt="Dictionary logo"
					className="Header-image img-fluid"
				/>
			</header>
			<main>
				<Dictionary />
			</main>
			<footer>Coded by Laurie Kranendonk</footer>
		</div>
	);
}

export default App;
