import React from 'react';
import Form from '../form/form';
import Joi from 'joi-browser';
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
		console.log(document.cookie);

		return (
			<div className="container-sm">
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
