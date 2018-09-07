Feature: Adding item to cart.

Find item on shop page.
Add item to cart.

Background: Background name: Searching element 
	Given 	User open browser on 'http://automationpractice.com' page
	And 	Search item 't-shirt'
	And 	Press Enter Key
	And 	Name of item is displayed 'Faded Short Sleeve T-shirts'

Scenario: Adding item to cart
	When 	Click on first item on AP page 'Faded Short Sleeve T-shirts'
	And 	Select on AP page 'Orange' color
	And 	Select on AP page 'L' size 
	And 	Select on AP page 'Add to cart' button
	Then 	Name is displayed on AP page 'Product successfully added to your shopping cart' information
	And 	Name is displayed on AP page 'Orange' information about item in cart
	And 	Name is displayed on AP page 'L' information about item in cart
