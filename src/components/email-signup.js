import React, { useState } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp';

const EmailListForm = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		addToMailChimp(email).then((data) => {
			console.log(data);
		}).catch((error) => console.log(error));
	};

	const handleEmailChange = (event) => {
		setEmail(event.currentTarget.value);
	};

	return (
		<form onSubmit={handleSubmit} className="">
			<label className="block w-full text-xl">Subscribe to Recive Updates!</label>
			<input type="text" onChange={handleEmailChange} />
			<button type="submit">Subscribe</button>
		</form>
	);
};

export default EmailListForm;