import React from 'react';

import Footer from '../footer/footer';
import Middle from '../middle/middle';
import Header from '../header/header';

const StartContent = () => {
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
		</div>
	);
};

export default StartContent;
