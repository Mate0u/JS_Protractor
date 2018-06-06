const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
var {Given, When, Then} = require('cucumber');

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^Search in google '(.*)'$/, (value) => {
	const inputField = element(by.id('lst-ib'));
	// const searchButton = element(by.css('.ds:nth-child(1) .lsb'))
	return inputField.sendKeys(value);	
	// return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});
When (/^Press Enter Key$/, () => {
	return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});