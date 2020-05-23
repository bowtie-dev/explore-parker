module.exports = {
	siteMetadata: {
		title: 'Explore Parker',
		description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/src/blog`
			}
		},
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
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-postcss',
		{ 
			resolve: 'gatsby-plugin-purgecss',
			options: {
			  printRejected: true, // Print removed selectors and processed file names
			  // develop: true, // Enable while using `gatsby develop`
			  tailwind: true, // Enable tailwindcss support
			  // whitelist: ['whitelist'], // Don't remove this selector
			  // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
			  // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		  }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};