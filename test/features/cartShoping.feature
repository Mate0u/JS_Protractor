Feature: Adding item to cart.

Find item on shop page.
Add item to cart.

Background: Background name: Searching element 
	Given 	User open browser on 'http://automationpractice.com' page
	And 	As a User I want to search item 't-shirt'
	And 	As a User I press Enter Key
	And 	As a User I see item 'Faded Short Sleeve T-shirts'

Scenario: Adding item to cart
	When 	As a User I click 'Faded Short Sleeve T-shirts'
	And 	As a User I select 'Orange' color
	And 	As a User I select 'L' size 
	And 	As a User I select 'Add to cart' button
	Then 	User see 'Product successfully added to your shopping cart' information
	# And 	User see 'Orange' color
	# And 	User see 'L' size
