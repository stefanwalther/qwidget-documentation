---
area: gettingstarted
title: Data Binding - Introduction
---

For understanding how **data-binding** in qWidget works, you first have to understand some very basics of data-binding in AngularJS because not only Qlik Sense but also qWidgets heavily uses the concept of [AngularJS](http://www.angularjs.org).

## The Scope
AngularJS introduces the concept of a "scope", in the context of qWidgets this means that all the data (dimensions & measures) and all properties are stored and exposed in the scope of your extensions/object. When it comes to data-binding you can use the entire scope to make your qWidget dynamic and bound to Qlik Sense.

The **great benefit of this approach** is that Qlik Sense automatically takes care of updating the scope, so if for example a new selection is made, the scope will be updated automatically. Since AngularJS takes care of updating your UI (depending of the underlaying scope), your UI will be updated accordingly.

The scope of a qWidget-objects contains:

- All **default properties**, which are available for all Qlik Sense objects (like title, subtitle, footer, etc.)
- A **"straight table"** (defined by one ore more dimensions and measures)
- Multiple **qWidget specific properties** (10 "Dynamic Properties" + 3 "Color Properties")


And these are also the values you can use to design your qWidget.

## Available Properties

The following properties are available to be bound to your HTML or CSS templates:

Property				| Description									| Type
:----------------------	| :------------------------------------------	| :---:
`layout.title`			| Title of your object / extension				| string
`layout.subtitle`		| Subtitle of your object						| string
`layout.property1`		| Custom property 1								| string
`layout.property2`		| Custom property 2								| string
`...`					| `...`											| `...` 
`layout.property10`		| Custom property 10							| string				

<div class="alert alert-info">Note: You do not need to know all the properties by heart, they are also easily accessible by using the Variable-Inserter.</div>



## Binding

### Inline Binding
The easiest way to bind some HTML-element to data is to use curly-braces (`{{safe "{{some_prop}}"}}`). So if you want to inject the value of the property "layout.title" somewhere into your HTML structure, just insert the following statement:

	{{safe "{{layout.title}}"}}

Everything inside the curly braces will be automatically replaced with the appropriate value, if the content within the curly braces cannot be found, the resulting string is just an empty string.

## More Information
Since data binding is realized using [AngularJS](https://angularjs.org/), further information can be found on the [AngularJS documentation page](https://docs.angularjs.org/api).

Within the context of qWidget the following topics are especially:

* [ngClass](https://docs.angularjs.org/api/ng/directive/ngClass)
* [ngClassEven](https://docs.angularjs.org/api/ng/directive/ngClassEven)
* [ngClassOdd](https://docs.angularjs.org/api/ng/directive/ngClassOdd)
* [ngHide](https://docs.angularjs.org/api/ng/directive/ngHide)
* [ngShow](https://docs.angularjs.org/api/ng/directive/ngShow)
* [ngIf](https://docs.angularjs.org/api/ng/directive/ngIf)
* [**ngRepeat**](https://docs.angularjs.org/api/ng/directive/ngRepeat)


