Feature: Prepare browser to tests

First open browser, check if is render.
Search in google 'cucumber'.

	Background: Prepare browser 
		Given 	User open browser on 'http://google.com' page

	Scenario: Opened browser
		Given 	Search in google 'cucumber'
