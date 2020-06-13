import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<section className="container flex items-center justify-center h-full">
			<div className="text-center w-full max-w-lg">
				<h1 className="font-graduate">NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... :(</p>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage;
