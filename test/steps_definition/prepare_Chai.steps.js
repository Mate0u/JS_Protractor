const expect = require('chai').expect;
const objects = require('../objects/prepare_chai.object.js');
const {Given, When, Then} = require('cucumber');
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const EC = protractor.ExpectedConditions;
const pageObjectLib = require('./pageObject.js');

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^Press Enter Key$/, () => {
	return pageObjectLib.sendEnter(); //thsi step is in pageObject.js 
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
When(/^Click on AP page '(.*)'$/, (value) => {
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
	browser.wait(EC.visibilityOf(element(by.css(objects.cartSuccesfullMessageCss))), 6000 ,"Custom Error Message");
	return element(by.css(objects.cartSuccesfullMessageCss)).getText().then((model) => {
		expect(model).to.contains(value);
	});
});
Then(/^Name is displayed on AP page '(.*)' information about item in cart$/, (value) => {
	return element(by.css(objects.cartSpecificationCss)).getText().then((model) => {
		expect(model).to.contains(value);
	});
});

