import { Link } from 'gatsby';
import React from 'react';
import Logo from './logo.js';

const Header = () => (
	<header className="bg-white block shadow z-10">
		<nav className="px-4 py-2">
			<div className="w-full max-w-screen-lg mx-auto">
				<div className="mx-auto sm:mx-0">
					<Link to="/">
						<Logo /> 
 					</Link>
			 	</div>
			</div>
		</nav>
	</header>
);
export default Header;
