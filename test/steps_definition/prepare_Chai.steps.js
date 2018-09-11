const objects = require('../objects/prepare_chai.object.js');
const { Given, When, Then } = require('cucumber');
const pageObjectLib = require('./objectLibrary/pageObject');
const stepsInGoogle = require('./objectLibrary/googleCommonSteps.js');
const pageAPPcommonSteps = require('./objectLibrary/pageAPPsteps.js');

Given(/^User open browser on '(.*)' page$/, (pageURL) => {
	return browser.driver.get(pageURL);
});
When(/^Press Enter Key$/, () => {
	return pageObjectLib.sendEnter();
});
When(/^Search in google '(.*)'$/, (value) => {
	return pageObjectLib.inputValue(objects.searchFieldGoogleCss, value);
});
Then(/^Firts result is '(.*)'$/, (value) => {
	return stepsInGoogle.googleFirstResultName(objects.firstResultXpath, value);
});
Then(/^Name of item is displayed '(.*)'$/, (value) => {
	return pageObjectLib.equalText(objects.firstItemNameAPCss, value);
});
When(/^Search item '(.*)'$/, (value) => {
	return pageObjectLib.inputValue(objects.searchFieldAPCss, value);
});
When(/^Click on first item on AP page '(.*)'$/, (value) => {
	pageObjectLib.equalText(objects.firstItemNameAPCss, value);
	return pageObjectLib.clickElement(objects.firstItemNameAPCss);
});
When(/^Select on AP page '(.*)' color$/, (value) => {
	return pageAPPcommonSteps.selectItemColor(value);
});
When(/^Select on AP page '(.*)' size$/, (value) => {
	return pageAPPcommonSteps.selectItemSize(objects.sizeSelectorCss, value);
});
When(/^Select on AP page 'Add to cart' button$/, () => {
	return element(by.css(objects.addToCartButtonCss)).click();
});
Then(/^Name is displayed on AP page '(.*)' information$/, (value) => {
	return pageObjectLib.containsText(objects.cartSuccesfullMessageCss, value);
});
Then(/^Name is displayed on AP page '(.*)' information about item in cart$/, (value) => {
	return pageObjectLib.containsText(objects.cartSpecificationCss, value);
});
