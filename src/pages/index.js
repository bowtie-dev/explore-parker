import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="parallax flag-bg p-5 relative">
			<div className="absolute inset-0 bg-gray-900 opacity-50" />
			<div className="text-white relative py-12 text-center">
				<h1 className="mb-0 text-4xl">A Swedish-American Coffee House</h1>
			</div>
		</div>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image  />
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
);

export default IndexPage;
