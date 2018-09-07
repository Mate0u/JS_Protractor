'use strict';

const pageObjectFunctions = function(){

	this.sendEnter = function(){
		return browser.actions().sendKeys(protractor.Key.ENTER).perform();
	};
};
module.exports = new pageObjectFunctions();