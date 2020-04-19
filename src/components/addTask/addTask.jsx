import React from 'react';
import Joi from 'joi-browser';
import Form from '../form/form';
import env from '../../env.json';
import { tasks } from '../../data/data.json';
import Axios from 'axios';
import Header from '../header/header';
class AddTask extends Form {
	state = {
		update: false,
		tasks,
		data: { name: '', description: '', urgency: 0 },
		errors: {}
	};

	schema = {
		name: Joi.string().required().label('Name').error(() => {
			return {
				message: 'Name darf nicht leer sein'
			};
		}),
		description: Joi.label('Beschreibung'),
		urgency: Joi.label('Wichtigkeit')
	};

	doSubmit = () => {
		const { name, description, urgency } = this.state.data;
		const object = {
			name,
			description,
			urgency
		};
		Axios({
			method: 'post',
			data: object,
			url: `${env.BACKEND}/newTask`,
			withCredentials: true
		}).then(
			() => {
				console.log('success');

				this.props.history.push({ pathname: '/tasks' });
			},
			(error) => {
				console.log(error);
				this.props.history.push({ pathname: '/login' });
			}
		);
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
				<h1>New Task</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('name', 'Name', true)}
					{this.renderInput('description', 'Beschreibung', false)}
					{this.renderInput('urgency', 'Wichtigkeit', false, 'range')}
					{this.renderButton('Add')}
				</form>
			</div>
		);
	}
}

export default AddTask;
