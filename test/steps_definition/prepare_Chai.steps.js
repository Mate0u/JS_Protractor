const expect = require('chai').expect;
const url = require('../configurations/url-data');
const objects = require('../objects/prepare_chai.object.js');

const stepDefinitionsWrapper = function () {

    Given(/^User open browser$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.get('http://juliemr.github.io/protractor-demo/');
        return 'pending';
    });
};
module.exports = stepDefinitionsWrapper;