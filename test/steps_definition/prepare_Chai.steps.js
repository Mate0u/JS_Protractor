const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
var {Given, When, Then} = require('cucumber');

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^Search in google '(.*)'$/, (value) => {
	const inputField = element(by.id('lst-ib'));
	return inputField.sendKeys(value);	
});
When(/^As a User I press Enter Key$/, () => {
	return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});
Then(/^Firts result is '(.*)'$/, (value) => {
	element(by.css(objects.firstResultCss)).getAttribute('Value').then((model) => {
		expect(model).to.equal(value);
	});
});