import React, { Component } from "react";
import "./App.css";
// import FetchRandomUser from "./components/FetchRandomUser";
// import Counter2 from "./components/Counter2";
// import ImageSlider from "./components/ImageSlider";
// import MyForm from "./components/MyForm";
// import ValidationForm from "./components/ValidationForm";
import TodoList from "./components/TodoList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);

		// if (this.state.whichComponentToShow === "ImageSlider") {
		// 	return (
		// 		<div className="App">
		// 			<ImageSlider />
		// 			<button
		// 				onClick={() => {
		// 					this.setState({ whichComponentToShow: "Counter2" });
		// 				}}
		// 			>
		// 				Show Counter
		// 			</button>
		// 		</div>
		// 	);
		// } else if (this.state.whichComponentToShow === "Counter2") {
		// 	return (
		// 		<div className="App">
		// 			<Counter2 />
		// 			<button
		// 				onClick={() => {
		// 					this.setState({ whichComponentToShow: "ImageSlider" });
		// 				}}
		// 			>
		// 				Show Image Slider
		// 			</button>
		// 		</div>
		// 	);
		// } else {
		// 	return null;
		// }
	}
}

export default App;
