Feature: Searching in google

First open browser, check if is render.
Search in google 'cucumber'.

Scenario: Opened google and search phrase
	Given 	User open browser on 'https://www.google.com' page
	When 	Search in google 'cucumber'
	And 	As a User I press Enter Key
	Then 	Firts result is 'https://cucumber.io/'
