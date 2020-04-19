import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
	render = () => {
		return this.props.onLogout() ? <Redirect to="/" /> : null;
	};
}

export default Logout;
