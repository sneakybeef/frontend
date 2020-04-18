import React from 'react';
import * as Axios from 'axios';
import Cookies from 'universal-cookie';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Tasks from '../apps/tasks/tasks';
import AddTask from '../addTask/addTask';
import Login from '../apps/login';
import Register from '../../components/register/register';
import Start from '../apps/start';

import env from './../../env.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: false,
			userName: '',
			email: '',
			token: null
		};
	}
	routing = (pathname, token) => {
		const { history } = this.props;

		history.push({ pathname, state: { token } });
	};

	handleLogin = async (userName, password) => {
		const response = await Axios({
			method: 'post',
			url: `${env.BACKEND}/user/login`,
			data: { userName, password },
			withCredentials: true
		}).then(
			(resp) => {
				console.log('success', resp);
				const { data: { token } } = resp;
				this.setState({ token, userName, password });

				console.log(document.cookie);
				return true;
			},
			(error) => {
				return false;
			}
		);
		return response;
	};

	handleRefresh() {
		const notRefresh = !this.state.refresh;
		this.setState({ refresh: true });
	}

	render = () => {
		return (
			<Router basename="/">
				<Route exact path="/" component={Start} />
				<Route
					exact
					path="/login"
					render={(props) => (
						<Login
							{...props}
							refresh={this.handleRefresh.bind(this)}
							onLogin={this.handleLogin.bind(this)}
						/>
					)}
				/>
				{this.state.token ? (
					<Route
						exact
						path="/tasks"
						component={() => <Tasks token={this.state.token} />}
						// render={(props) => (
						// 	<Tasks {...props} refresh={this.handleRefresh.bind(this)} token={this.state.token} />
						// )}
					/>
				) : (
					<Route exact path="/tasks" component={Tasks} />
				)}
				<Route exact path="/tasks/new" component={AddTask} />
				<Route exact path="/register" component={Register} />
			</Router>
		);
	};
}

export default App;
