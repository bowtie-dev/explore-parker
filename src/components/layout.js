/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
	return (
		<div className="h-screen flex flex-col bg-parchment-500">
			<main className="flex-1">{children}</main>
			<footer>
				<div className="container text-center text-sm py-4">
					© {new Date().getFullYear()} JMG
				</div>
			</footer>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
