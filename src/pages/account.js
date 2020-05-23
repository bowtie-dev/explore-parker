import React from 'react';
import { login, isAuthenticated, getProfile } from '../utils/auth';
const Greeting = ({ user }) => {
	return <p>Hi, {user.name ? user.name : 'friend'}!</p>;
};
const Account = () => {
	if (!isAuthenticated()) {
		login();
		return <p>Redirecting to login...</p>;
	}
	
	const user = getProfile();
	return (
		<div>
			<Greeting user={user} />
			<p>This is going to be protected.</p>
		</div>
	);
};
export default Account;