import React from "react";

export default class Counter2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initalCount,
		};
	}

	inc = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	dec = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		return (
			<div>
				<div>count: {this.state.count}</div>
				<button onClick={this.inc}>increment</button>
				<button onClick={this.dec}>decrement</button>
			</div>
		);
	}
}
