const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
'use strict';

const pageObjectFunctions = function () {
	this.sendEnter = function () {
		return browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
	this.clickElement = function (elementPath) {
		browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000, "Custom Error Message");
		return element(by.css(elementPath)).click();
	};
	this.waitForElemet = function (elementPath) {
		return browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000, "Custom Error Message");
	};
	this.equalText = function (elementPath, value) {
		browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000, "Custom Error Message");
		return element(by.css(elementPath)).getText().then((model) => {
			expect(model).to.equal(value);
		});
	};
	this.containsText = function (elementPath, value) {
		browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000, "Custom Error Message");
		return element(by.css(elementPath)).getText().then((model) => {
			expect(model).to.contains(value);
		});
	};
	this.inputValue = function (elementPath, value) {
		browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000, "Custom Error Message");
		const inputField = element(by.css(elementPath));
		return inputField.sendKeys(value);
	};
};
module.exports = new pageObjectFunctions();
