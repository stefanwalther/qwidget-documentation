---
area: gettingstarted
title: Styling your qWidgets
---

## Basic Styling

For styling your qWidgets you can use the entire functionality of CSS and even more, you can use [Less](http://lesscss.org/).
 

## Inline-Styles vs. Separated-Styles
Basically you can certainly style all your Html-elements with inline-styles but it is highly recommended to use separated styles due to the following reasons:

* Better maintainability
* Better re-usability
* HTML is easier to understand and read for others


### Example Inline-Style

	<div style="color:red;font-weight:bold;">
	This is my qWidget
	</div>

Inline-styles work without any problems but are - due to reduced readability and maintainability - **not recommended**.

### Example Separated Style

***Html:***

	<div class="myClass">
	This is my qWidgets
	</div>
  
***Css:***

	.myClass {
		color:red;
		font-weight:bold;
	}


## Dynamic Binding
Even within your CSS/Less definition you can use dynamic data-binding, e.g.:

Dynamic CSS-properties

	/* layout.property1 = #efefef */
	.myClass {
		color: {{safe "{{layout.property1}}"}};
	}

Styling with Less-properties:

	/* layout.property1 = #efefef */
	@color:{{layout.property1}};
	
	.myClass {
		color:@color; /* Use the Less variable */
	}


## A Note on Potential CSS-Conflicts
One of the main challenges when working on the qWidget concept was to find a solution that prevents a user influencing or even breaking the styling of the client. Qlik finally came up with a solution where this should never happen.

