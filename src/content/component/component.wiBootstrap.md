---
area: component
navtitle: Bootstrap Style
title: wiBootstrap Component
---

If you want to use the [Bootstrap](http://getbootstrap.com/) CSS in your qWidget, you can enable Boostrap styling by surrounding your Bootstrap related code by `<wi-bootstrap>...</wi-bootstrap>`:

## Basic Example

***Element Example:***

	<wi-bootstrap> <!-- This adds the bootstrap CSS to your qWidget -->
		<button type="button" class="btn btn-primary">I am a Bootstrap Button</button>
	</wi-bootstrap>

## Tips & Tricks
* Use `container-fluid` instead of `container`
* If existing code-snippets for Bootstrap are not working, use Chrome Web Developer tools to find the clashes and overwrite the classes in your qWidget-CSS

## Known Limitations
* Bootstrap components which are using JavaScript are not supported, yet. These components will be provided as separate components using [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/).
	* Already implemented:
		* `wiTab`
