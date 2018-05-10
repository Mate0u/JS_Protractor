const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
var {Given} = require('cucumber');

	Given(/^User open browser on '(.*)' page$/, (pageURL) => {
		console.log(pageURL);
		// browser.get(pageURL);
		browser.driver.sleep(5000);
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.pause();
	});
	Given(/^Search in google '(.*)'$/, (value) => {
		browser.sleep(5000);
		// element(by.id('lst-ib'))
	});
