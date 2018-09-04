const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
var {Given, When, Then} = require('cucumber');

//reusable steps
Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^As a User I press Enter Key$/, () => {
	return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

//steps for Scenario: Opened google and search phrase
When(/^Search in google '(.*)'$/, (value) => {
	const inputField = element(by.id('lst-ib'));
	return inputField.sendKeys(value);	
});
Then(/^Firts result is '(.*)'$/, (value) => {
	return element(by.css(objects.firstResultCss)).getText().then((model) => {
		console.log(model);
		expect(model).to.equal(value);
	});
});

//steps for Scenario: Searching in browser
When(/^As a User I want to search '(.*)'$/, (value) => {
	const inputField = element(by.id(objects.searchFieldGoogleId));
	return inputField.sendKeys(value);
});
Then(/^As a User I see item '(.*)'$/, (value) => {
	return element(by.css(objects.firstItemNameAPCss)).getAttribute('Value').then((model) => {
		expect(model).to.equal(value);
	});
});

//step for searching item in shop
When(/^As a User I want to search item '(.*)'$/, (value) => {
	element(by.css(objects.searchFieldAPCss)).click();
	const inputField = element(by.id(objects.searchFieldAPCss));
	return inputField.sendKeys(value);
});