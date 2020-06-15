module.exports = {
	siteMetadata: {
		title: 'Explore Parker',
		description: 'A platform to support locally owned and operated businesses, clubs, schools, and other organizations of Parker, Colorado',
		author: 'Josh Graham',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
			  	plugins: [
					{
				  		resolve: 'gatsby-remark-images',
				  		options: {
							maxWidth: 1200,
				  		},
					},
			  	],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'explore-parker',
				short_name: 'parker',
				start_url: '/',
				background_color: '#E7E1C9',
				theme_color: '#E7E1C9',
				display: 'minimal-ui',
				icon: 'src/images/favicon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-postcss',
		{ 
			resolve: 'gatsby-plugin-purgecss',
			options: {
			  printRejected: true, // Print removed selectors and processed file names
			  tailwind: true // Enable tailwindcss support
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://exploreparker.us10.list-manage.com/subscribe/post?u=b240feab788e425158daaa8a3&id=c225545ad8', // string; add your MC list endpoint here; see instructions below
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
	
		// `gatsby-plugin-offline`,
	]
};
