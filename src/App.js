import dictionaryLogo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img
						src={dictionaryLogo}
						alt="Dictionary logo"
						className="Header-image img-fluid"
					/>
				</header>
				<main>
					<h1>Dictionary</h1>
					<Dictionary />
				</main>
			</div>
			<footer>
				Coded by Laurie Kranendonk - <a href="https://github.com/LaurieKD/dictionary-project"> open-source code</a>
			</footer>
		</div>
	);
}

export default App;
