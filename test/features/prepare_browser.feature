Feature: Prepare browser to tests

First open browser, check if is render.
Search in google 'cucumber'.

Scenario: Opened browser
	Given 	User open browser on 'https://www.google.com' page
	When 	Search in google 'cucumber'
	And 	As a User I press Enter Key
	Then 	Firts result is 'https://cucumber.io/'

# Scenario: Searching in browser 
# 	Given 	User open browser on 'http://automationpractice.com' page
# 	When 	As a User I want to search 't-shirt'
# 	And 	As a User I press Enter Key
# 	Then 	As a User I see item 'Faded Short Sleeve T-shirts'