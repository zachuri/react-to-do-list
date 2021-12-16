import React from "react";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "ben",
			favoritePet: "zack",
			rememberMe: false,
			title: "Miss.",
		};
	}

	handleChange = (event) => {
		const isCheckbox = event.target.type === "checkbox";
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<input
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<textarea
					name="favoritePet"
					value={this.state.favoritePet}
					onChange={this.handleChange}
				/>
				<input
					name="remeberMe"
					type="checkbox"
					checked={this.state.rememberMe}
					onChange={this.handleChange}
				/>
				<div>
					<select
						name="title"
						value={this.state.title}
						onChange={this.handleSelect}
					>
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
