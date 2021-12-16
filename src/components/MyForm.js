import React from "react";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "ben",
			favoritePet: "",
			rememberMe: false,
			title: "Miss.",
		};
	}

	handleChange = (event) => {
		// console.log(event.target.value);
		this.setState({ name: event.target.value });
	};

	handleChangeFavoritePet = (event) => {
		// console.log(event.target.value);
		this.setState({ favoritePet: event.target.value });
	};

	handleCheck = (event) => {
		this.setState({ rememberMe: event.target.check });
	};

	handleSelect = (event) => {
		this.setState({ title: event.target.check });
	};

	handleSubmit = () => {
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<input value={this.state.name} onChange={this.handleChange} />
				<textarea
					value={this.state.favoritePet}
					onChange={this.handleChangeFavoritePet}
				/>
				<input
					type="checkbox"
					checked={this.state.rememberMe}
					onChange={this.handleCheck}
				/>
				<div>
					<select value={this.state.title} onChange={this.handleSelect}>
						<option>Mr.</option>
						<option>Miss.</option>
						<option>Ms.</option>
						<option>Mrs.</option>
					</select>
				</div>
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
		);
	}
}
