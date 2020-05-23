module.exports = {
	globals: {
	  __PATH_PREFIX__: true,
	},
	extends: `react-app`,
	rules: {
		'no-var': 2,
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'semi': [
			'error',
			'always'
		],
		'quotes': [
			'error',
			'single'
		],
		'space-before-function-paren': ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['warn', 'error'] }] : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}