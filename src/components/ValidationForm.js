import React from "react";

const initialState = {
	name: "",
	email: "",
	password: "",
	nameError: "",
	emailError: "",
	passwordError: "",
};

export default class ValidationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	handleChange = (event) => {
		const isCheckbox = event.target.type === "checkbox";
		this.setState({
			[event.target.name]: isCheckbox
				? event.target.checked
				: event.target.value,
		});
	};

	validate = () => {
		let nameError = "";
		let emailError = "";
		// let passwordError = "";

		if (!this.state.name) {
			nameError = "name cannot be blank";
		}

		if (!this.state.email.includes("@")) {
			emailError = "invalid email";
		}

		if (emailError || nameError) {
			// emailError: emailError = just emailError
			this.setState({ emailError, nameError });
			return false;
		}

		return true;
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const isValid = this.validate();

		if (isValid) {
			console.log(this.state);
			// Clear Form

			this.setState(initialState);
		}
	};

	render() {
		return (
			<form>
				<div>
					<input
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.nameError}
					</div>
				</div>
				<div>
					<input
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.emailError}
					</div>
				</div>
				<div>
					<input
						name="password"
						type="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.passwordError}
					</div>
				</div>
				<button onClick={this.handleSubmit}>Submit</button>
			</form>
		);
	}
}
