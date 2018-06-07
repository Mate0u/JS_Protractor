Feature: Prepare browser to tests

First open browser, check if is render.
Search in google 'cucumber'.

Scenario: Opened browser
	Given 	User open browser on 'https://www.google.com' page
	When 	Search in google 'cucumber'
	And 	Press Enter Key
	Then 	Firts result is 'https://cucumber.io/'