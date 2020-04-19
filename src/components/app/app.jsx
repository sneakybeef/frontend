import React from 'react';
import * as Axios from 'axios';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Tasks from '../apps/tasks/tasks';
import AddTask from '../addTask/addTask';
import Login from '../apps/login';
import Register from '../../components/register/register';
import Start from '../apps/start';
import Logout from '../../components/logout';

import env from './../../env.json';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			refresh: false,
			userName: '',
			email: ''
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
			() => {
				this.setState({ userName, password });

				return true;
			},
			(error) => {
				return false;
			}
		);
		return response;
	};

	handleLogout = async (userName, password) => {
		const response = await Axios({
			method: 'post',
			url: `${env.BACKEND}/user/logout`,
			withCredentials: true
		}).then(
			(resp) => {
				const { data: { token } } = resp;
				this.setState({ token, userName: '', password: '', email: '' });

				return true;
			},
			(error) => {
				return false;
			}
		);
		return response;
	};

	render = () => {
		return (
			<Router basename="/">
				<Route exact path="/" component={Start} />
				<Route
					exact
					path="/logout"
					render={(props) => <Logout {...props} onLogout={this.handleLogout.bind(this)} />}
				/>
				<Route
					exact
					path="/login"
					render={(props) => <Login {...props} onLogin={this.handleLogin.bind(this)} />}
				/>
				{this.state.token ? (
					<Route exact path="/tasks" component={() => <Tasks token={this.state.token} />} />
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
