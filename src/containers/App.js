import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import * as serviceWorker from "../serviceWorker";
import "tachyons";
import { robots } from "../robots";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users });
			});
	}

	render() {
		const filterd = this.state.robots.filter(robot => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		if (filterd.length === 0) return <h1 className="f2">LOADING</h1>;
		else
			return (
				<div className="tc">
					<h1 className="f2">ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filterd} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;
