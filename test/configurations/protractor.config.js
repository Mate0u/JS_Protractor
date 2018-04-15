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
	cucumberOpts: {
		/*	Include all file steps file, env file, hook file here	*/
		require: [
			'../steps_definition/prepare_Chai.steps.js'
		],
		format: "summary"
	},
	capabilities: {
		'browserName': 'chrome'
	}
};