const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;

'use strict';

const pageObjectFunctions = function(){

	this.sendEnter = function(){
		return browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
	this.waitForElemet = function(elementPath){
		return browser.wait(EC.visibilityOf(element(by.css(elementPath))), 6000 ,"Custom Error Message");
	};
	this.checkingTextContains = function(elementPath, value){
		return element(by.css(elementPath)).getText().then((model) => {
			expect(model).to.contains(value);
		});
	};
	this.googleSearch = function(value){
		const inputField = element(by.id('lst-ib'));
		return inputField.sendKeys(value);
	};
};
module.exports = new pageObjectFunctions();