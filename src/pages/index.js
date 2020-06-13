import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="container flex items-center justify-center h-full">
			<div className="text-center w-full max-w-lg">
				<h1 className="font-graduate">Explore Parker</h1>
				<h4 className="font-graduate mb-6">(Coming Soon)</h4>
				<p>The goal of this website is to provide a platform to support locally owned and operated businesses, clubs, schools, and other organizations. This mission will hopefully be fulfilled by accumulating crowdsourced content that inspires community and purpose.</p>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
