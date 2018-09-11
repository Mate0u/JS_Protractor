const platform = require('platform');
const fse = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const deviceInfo = require('./deviceInfo.js');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'../features/*.feature'
		// '../features/cartShoping.feature'
	],
	// set to "custom" instead of cucumber.
	framework: 'custom',
	// path relative to the current config file
	frameworkPath: '../../node_modules/protractor-cucumber-framework',
	cucumberOpts: {
		/*	Include all file steps file, env file, hook file here	*/
		require: [
			// path to step definition
			'../steps_definition/*.js'
		],
		format: 'json:target/reports/results.json',
	},
	capabilities: {
		'browserName': 'chrome',
		//protractor-multiple-cucumber-html-reporter-plugin
		metadata: {
			device: '' + platform.os,
			platform: {
				name: '' + deviceInfo.platformName(),
				version: ''
			}
		}
	},
	plugins: [{
		package: 'protractor-multiple-cucumber-html-reporter-plugin',
		options: {
			displayDuration: true,
			removeOriginalJsonReportFile: true,
			reportName: 'Report for github.com/Mate0u/JS_Protractor',
			automaticallyGenerateReport: true,
			removeExistingJsonReportFile: true,
			pageFooter: '<div><p>Test automation</p></div>'
		}
	}],
	onPrepare() {
		browser.ignoreSynchronization = true;
		/*	Maximize browser before running test suites	*/
		browser.driver.manage().window().maximize();
		/* Delete report directory	*/
		fse.remove(path.resolve(__dirname, '../../target/reports/report'), (err) => {
			if (err) {
				throw err;
			}
			console.log('"target/reports/report" was deleted');
		});
	}
}
