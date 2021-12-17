import React from "react";

export default class FetchRandomUser extends React.Component {
	state = {
		loading: true,
		people: [],
	};

	async componentDidMount() {
		const url = "https://api.randomuser.me/?results=5";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ loading: false, people: data.results });
		// console.log(data.results[0]);
	}

	render() {
		if (this.state.loading) {
			return <div>loading...</div>;
		}

		if (!this.state.people) {
			return <div>didn't get a person</div>;
		}

		const peopleJsx = []; // Store People JSX in an array

		this.state.people.forEach((person) => {
			peopleJsx.push(
				<div key={person.name.first + person.name.last}>
					<div>{person.name.title}</div>
					<div>{person.name.first}</div>
					<div>{person.name.last}</div>
					<img src={person.picture.large} />
				</div>
			);
		});

		return <div>{peopleJsx}</div>;
	}
}
