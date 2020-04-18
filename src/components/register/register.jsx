import React from 'react';
import Form from '../form/form';
import Joi from 'joi-browser';
import env from '../../env.json';
import Axios from 'axios';
class Register extends Form {
	state = {
		data: { email: '', userName: '', password: '' },
		errors: {}
	};
	schema = {
		email: Joi.string().email({ minDomainSegments: 2 }).required(),
		userName: Joi.string().required().label('Benutzer'),
		password: Joi.string().required().label('Passwort')
	};
	doSubmit = () => {
		const { userName, email, password } = this.state.data;
		const { history } = this.props;

		Axios({
			method: 'post',
			url: `${env.BACKEND}/user/register`,
			data: { email, userName, password },
			withCredentials: true
		}).then(
			(resp) => {
				console.log('success', resp);
				const { data: { token } } = resp;
				this.setState({ token, userName, password });
				history.push({ pathname: '/login' });
			},
			(error) => {
				console.log(error);
			}
		);
	};
	render() {
		return (
			<div className="container-sm">
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('email', 'Email', true, 'email')}
					{this.renderInput('userName', 'Name', false, 'text')}
					{this.renderInput('password', 'Passwort', false, 'password')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default Register;
