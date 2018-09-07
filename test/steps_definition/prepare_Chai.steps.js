const expect = require('chai').expect;
const objects = require('../objects/prepare_chai.object.js');
const { Given, When, Then } = require('cucumber');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const pageObjectLib = require('./pageObject.js');

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^Press Enter Key$/, () => {
	return pageObjectLib.sendEnter();
});
When(/^Search in google '(.*)'$/, (value) => {
	return pageObjectLib.googleSearch(value);
});
Then(/^Firts result is '(.*)'$/, (value) => {
	return element(by.css(objects.firstResultCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
});
Then(/^Name of item is displayed '(.*)'$/, (value) => {
	return element(by.css(objects.firstItemNameAPCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
});
When(/^Search item '(.*)'$/, (value) => {
	element(by.css(objects.searchFieldAPCss)).click();
	const inputField = element(by.css(objects.searchFieldAPCss));
	return inputField.sendKeys(value);
});
When(/^Click on first item on AP page '(.*)'$/, (value) => {
	element(by.css(objects.firstItemNameAPCss)).getText().then((model) => {
		expect(model).to.equal(value);
	});
	return element(by.css(objects.firstItemNameAPCss)).click();
});
When(/^Select on AP page '(.*)' color$/, (value) => {
	return element(by.xpath('//*[@name="' + value + '"]')).click();
});
When(/^Select on AP page '(.*)' size$/, (value) => {
	element(by.css(objects.sizeSelectorCss)).click();
	return element(by.xpath('//*[@title="' + value + '"]')).click();
});
When(/^Select on AP page 'Add to cart' button$/, () => {
	return element(by.css(objects.addToCartButtonCss)).click();
});
Then(/^Name is displayed on AP page '(.*)' information$/, (value) => {
	pageObjectLib.waitForElemet(objects.cartSuccesfullMessageCss);
	return pageObjectLib.checkingTextContains(objects.cartSuccesfullMessageCss, value);
});
Then(/^Name is displayed on AP page '(.*)' information about item in cart$/, (value) => {
	pageObjectLib.checkingTextContains(objects.cartSpecificationCss, value);
});

