import React from 'react';
import Form from '../form/form';
import Joi from 'joi-browser';
import Header from './../header/header';
class Login extends Form {
	state = {
		data: { userName: '', password: '' },
		errors: {}
	};
	schema = {
		userName: Joi.string().required().label('Benutzer'),
		password: Joi.string().required().label('Passwort')
	};
	doSubmit = async () => {
		const { onLogin } = this.props;
		const { history } = this.props;
		const { userName, password } = this.state.data;
		onLogin(userName, password).then((success) => {
			if (success) {
				history.push({ pathname: '/tasks' });
			}
		});
	};
	render() {
		const links = [
			{ name: 'Home', url: '/' },
			{ name: 'Tasks', url: '/tasks' },
			{ name: 'Login', url: 'login' },
			{ name: 'Register', url: '/register' },
			{ name: 'NewTask', url: '/tasks/new' },
			{ name: 'Logout', url: '/logout' }
		];

		return (
			<div className="container-sm">
				<Header links={links} />
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('userName', 'Benutzer', true)}
					{this.renderInput('password', 'Passwort', false, 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default Login;
