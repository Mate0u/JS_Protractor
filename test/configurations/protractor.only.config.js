exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../steps_definition/prepare_protractor.steps.js'],
   multiCapabilities: [{
    browserName: 'chrome'
  }]
}