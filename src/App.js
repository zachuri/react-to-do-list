import React, { Component } from "react";
import "./App.css";
import Counter2 from "./components/Counter2";
import ImageSlider from "./components/ImageSlider";
// import TodoList from "./components/TodoList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
			whichComponentToShow: "ImageSlider",
		};
	}

	render() {
		if (this.state.whichComponentToShow === "ImageSlider") {
			return (
				<div className="App">
					<ImageSlider />
					<button
						onClick={() => {
							this.setState({ whichComponentToShow: "Counter2" });
						}}
					>
						Show Counter
					</button>
				</div>
			);
		} else if (this.state.whichComponentToShow === "Counter2") {
			return (
				<div className="App">
					<Counter2 />
					<button
						onClick={() => {
							this.setState({ whichComponentToShow: "ImageSlider" });
						}}
					>
						Show Image Slider
					</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default App;
