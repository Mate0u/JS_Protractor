const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
const{Given, When, Then} = require('cucumber');

	Given('User open browser on google.com page', function () {
		return browser.get('http://juliemr.github.io/protractor-demo/');
	});