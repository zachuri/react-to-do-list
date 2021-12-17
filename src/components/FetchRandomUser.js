import React from "react";

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		person: null,
	};

	async componentDidMount() {
		const url = "https://api.randomuser.me/";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ loading: false, person: data.results[0] });
		// console.log(data.results[0]);
	}

	render() {
		if (this.state.loading) {
			return <div>loading...</div>;
		}

		if (!this.state.person) {
			return <div>didn't get a person</div>;
		}

		return (
			<div>
				<div>
					<div>{this.state.person.name.title}</div>
					<div>{this.state.person.name.first}</div>
					<div>{this.state.person.name.last}</div>
					<img src={this.state.person.picture.large} />
				</div>
			</div>
		);
	}
}
