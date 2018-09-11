const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
const objects = require('../../objects/prepare_chai.object.js');
'use strict';

const pageObjectFunctions = function () {
	this.googleFirstResultName = function (elementPath, value) {
		browser.wait(EC.visibilityOf(element(by.xpath(elementPath))), 6000, "Custom Error Message");
		return element(by.xpath(elementPath)).getText().then((model) => {
			expect(model).to.equal(value);
		});
	};
};
module.exports = new pageObjectFunctions();
