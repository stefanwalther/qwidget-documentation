---
area: component
navtitle: Query
title: wiQuery Component
published: false
---

wiQuery allows you to query the QIX-engine by defining objects by declaration.
The following object types can be retrieved:

* Expressions
* List Objects
* HyperCubes

There are two different notations to declare the desired requests for the QIX-engine:

* JSON Notation
* XML Notation

<div class="alert alert-danger">
**Experimental feature**, doesn't fully work, yet.
</div>

## Basic Example (JSON Notation)

***Definition:***

	<wiQuery expression="[{target: 'myExpression', expression: '=GetPossibleCount('Dim1')}]">
		<view>
			{{safe "{{result.myExpression}}"}}
		</view>
	</wiQuery>

***Result:***

> 

## Basic Example (XML Notation)

***Definition:***

	<wiQuery>
		<lists>
			<list target="myExpression" expression="GetPossibleCount('Dim1')" />
		</lists>
		<view>
			{{safe "{{result.myExpression}}"}}
		</view>
	<wiQuery>

## Expressions

## Lists

## HyperCubes