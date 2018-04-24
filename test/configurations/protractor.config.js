exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'../features/*.feature'
	],
	// set to "custom" instead of cucumber.
	framework: 'custom',
	// path relative to the current config file
	frameworkPath: '../../node_modules/protractor-cucumber-framework',
	// require feature files
	require: [
		'../steps_definition/*.js'
	],
	cucumberOpts: {
		/*	Include all file steps file, env file, hook file here	*/
		format: "summary"
	},
	capabilities: {
		'browserName': 'chrome'
	}
};