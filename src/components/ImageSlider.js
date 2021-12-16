import React from "react";

export default class ImageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: ["Image1", "Image2", "Image3", "Image4"],
			count: 0,
		};
	}

	handleNext = () => {
		console.log(this.state);

		if (this.state.count + 1 < this.state.images.length) {
			this.setState({
				count: this.state.count + 1,
			});
		} else {
			console.log("out of bounds");
		}
	};

	handlePrev = () => {
		console.log(this.state);

		if (this.state.count - 1 > -1) {
			this.setState({
				count: this.state.count - 1,
			});
		} else {
			console.log("out of bounds");
		}
	};

	render() {
		return (
			<div>
				<div>{this.state.images[this.state.count]}</div>
				<button onClick={this.handlePrev}>Prev</button>
				<button onClick={this.handleNext}>Next</button>
			</div>
		);
	}
}
