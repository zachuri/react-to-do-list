import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
	state = {
		text: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		//props.onSubmit -> paramter function passed from parent
		this.props.onSubmit({
			id: shortid.generate(),
			text: this.state.text,
			complete: false,
		});

		this.setState({
			text: "",
		});
		//Submit
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="text"
					value={this.state.text}
					onChange={this.handleChange}
					placeholder="todo..."
				/>
				<button onClick={this.handleSubmit}>add todo</button>
			</form>
		);
	}
}
