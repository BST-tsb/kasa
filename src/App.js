import Home from "./routes/home/home";
import Card from "./routes/card/card";
import About from "./routes/about/about";
import Error from "./routes/error/error";
import {Routes, Route} from "react-router-dom";
import "./style/style.scss"


function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/*" element={<Error />} />
				<Route path="/card/:id" element={<Card />} />
			</Routes>
		</div>
		
	);
}

export default App;


