import React from 'react';
import Joi from 'joi-browser';
import Form from '../form/form';
import env from '../../env.json';
import { tasks } from '../../data/data.json';

class AddTask extends Form {
	state = {
		update: false,
		tasks,
		data: { name: '', description: '', urgency: 0 },
		errors: {}
	};

	schema = {
		name: Joi.string().required().label('Benutzer'),
		description: Joi.string().required().label('Passwort'),
		urgency: Joi.string().required().label('Wichtigkeit')
	};

	redirect = () => {
		this.props.history.push({ pathname: `/tasks`, update: true });
	};

	doSubmit = () => {
		const { name, description, urgency } = this.state.data;
		const object = {
			name,
			description,
			urgency
		};

		fetch(`${env.BACKEND}/newTask`, {
			/* global fetch:false */
			method: 'POST',
			body: JSON.stringify(object),
			headers: { 'Content-Type': 'application/json' }
		});
		this.redirect();
	};

	render() {
		return (
			<div className="container-sm">
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
