Feature: Adding item to cart.

Find item on shop page.
Add item to cart.

Scenario: Searching element 
	Given 	User open browser on 'http://automationpractice.com' page
	When 	As a User I want to search 't-shirt'
	And 	As a User I press Enter Key
	Then 	As a User I see item 'Faded Short Sleeve T-shirts'