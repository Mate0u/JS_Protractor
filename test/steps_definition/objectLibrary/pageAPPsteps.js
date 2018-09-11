const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;
'use strict';

const pageAPPcommonSteps = function () {
	this.selectItemColor = function (value) {
		return element(by.xpath('//*[@name="' + value + '"]')).click();
	};
	this.selectItemSize = function (elementPath, value) {
		element(by.css(elementPath)).click();
		return element(by.xpath('//*[@title="' + value + '"]')).click();
	};
};
module.exports = new pageAPPcommonSteps();
