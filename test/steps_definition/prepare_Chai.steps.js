const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');
const {Given, When, Then} = require('cucumber');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const EC = protractor.ExpectedConditions;

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^As a User I press Enter Key$/, () => {
	return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});
When(/^Search in google '(.*)'$/, (value) => {
	const inputField = element(by.id('lst-ib'));
	return inputField.sendKeys(value);	
});
Then(/^Firts result is '(.*)'$/, (value) => {
	return element(by.css(objects.firstResultCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
});
When(/^As a User I want to search '(.*)'$/, (value) => {
	const inputField = element(by.id(objects.searchFieldGoogleId));
	return inputField.sendKeys(value);
});
Then(/^As a User I see item '(.*)'$/, (value) => {
	return element(by.css(objects.firstItemNameAPCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
});
When(/^As a User I want to search item '(.*)'$/, (value) => {
	element(by.css(objects.searchFieldAPCss)).click();
	const inputField = element(by.css(objects.searchFieldAPCss));
	return inputField.sendKeys(value);
});
When(/^As a User I click '(.*)'$/, (value) => {
	element(by.css(objects.firstItemNameAPCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
	return element(by.css(objects.firstItemNameAPCss)).click();
});
When(/^As a User I select '(.*)' color$/, (value) => {
	return element(by.xpath('//*[@name="' + value + '"]')).click();
});
When(/^As a User I select '(.*)' size$/, (value) => {
	element(by.css(objects.sizeSelectorCss)).click();
	return element(by.xpath('//*[@title="' + value + '"]')).click();
});
When(/^As a User I select '(.*)' button$/, (value) => {
	return element(by.css(objects.addToCartButtonCss)).click();
});
Then(/^User see '(.*)' information$/, (value) => {
	browser.wait(EC.visibilityOf(element(by.css(objects.cartSuccesfullMessageCss))), 6000 ,"Custom Error Message");
	return element(by.css(objects.cartSuccesfullMessageCss)).getText().then((model) => {
		expect(model).to.contains(value);
	});
});
Then(/^User see '(.*)' information about item in cart$/, (value) => {
	return element(by.css(objects.cartSpecificationCss)).getText().then((model) => {
		expect(model).to.contains(value);
	});
});

