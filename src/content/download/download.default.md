---
area: download
title: Download
---


## Latest Qlik Sense 1.0 Build

* **Version 0.21.01**
* **Date:** 2014-12-12
* **Tested On:**
	* Qlik Sense Version: 1.0, 1.0.1, 1.0.2
	* Qlik Sense Server: 1.0, 1.0.1, 1.0.2
	* Browser: Chrome + Internet Explorer 11 + Firefox (some minor limitations)
	* Not tested yet: Safari
* The latest version can be downloaded from the [Qlik Community - qWidget Limited Beta Forum](http://community.qlik.com/community/qlikview_beta_programs/qwidget_limited_public_beta)

-----

## Change Log

### Version 0.21.02
* Date: 2014-12-16
* Improvements:
    * Better loading & error messages

### Version 0.21.01
* Date: 2014-12-12
* Improvements
    * Usage of snippets and qWidgets
    * All modal dialogs can now also be closed by pressing the Esc key
    * The badge "Not approved" in the list of qWidgets is only displayed if the qWidget is not marked as "private"
    * Optimizations to the repository to prevent lock-out scenarios if the user session expires.
    * Some minor layout improvements

### Version 0.20.04
* Date: 2014-12-08
* Initial version for the Limited Public Beta of qWidget
* Changes:
    * Documentation has been moved to (http://doc.qwidget.mod.bz/)


## Change Log before Limited Public Beta

### Version 0.14.02
* **Bugfixes:**
    * Loading from the Qlik Internal Repository didn't work
    * Hypercube-Shorthand notation didn't work properly.

### Version 0.14.01
* **Minor Update:**
    * Removed message in case of MS10

### Version 0.13.03
* **Minor Changes:**
    * Updated editor source files (ACE editor)
    * Some performance optimization in the HyperCube shorthand notation
* **Bugfixes:**
    * Minor changes to enable qWidget also for Qlik Sense MS9
    * If qWidget has been added to the master-items, now only the master-item can be edited
    * Minor bugfixes to `wiDatePicker`

### Version 0.13.00
Date: 2014-10-26

* **Features / Improvements:**
    * New component `wi-datepicker`
* **Bugfixes:**
    * Some major bugfixes to get qWidget working in Firefox
    * Embedding linked-objects into tabs should now work by default

### Version 0.12.03
Date: 2014-10-22

* **Features / Improvements:**
    * Improved `wi-sys-info` ...
		* Added the ability to get the Master Objects with `wi-sys-info`
		* Added details to `measures`, `dimensions` and `masterobjects` in the default output of `wi-sys-info`
    * Enabled `wi-action` in `wi-tab`
* **Bugfixes:**
	* Fixed a lot of errors in the documentation

### Version 0.12.01
Date: 2014-10-16

* **Features:**
    * Improvements to `wi-sys-info`: Sheets are now returned in the correct order
    * Improvements to `wi-action`: `gotoSheet`, `nextSheet` & `prevSheet` work now much better (without a hard browser refresh)

### Version 0.12.0 
Date: 2014-10-13

* **Features:**
    * New `wi-buttongroup` component
* **Breaking Changes:**
    * Renamed wiSlider's property `bind-qs` to `bind-qs-var`
    * Renamed wiSlider's property `bind-qs-min` to `bind-qs-var-min`
    * Renamed wiSlider's property `bind-qs-max` to `bind-qs-var-min`
    * Renamed wiSlider's property `type` to `design`
    * Renamed wiProgressbar's property `type` to `design`


### Version 0.11.03
Date: 2014-10-06

* **Bugfixes:**
    * Several minor bugfixes for Qlik Sense Server 1.0
    * On the Qlik Sense Server assets from local repository couldn't be loaded (.less is not an allowed media-type)
    * New qWidget couldn't be saved
    * Prevent calling the qWidget-Webservice in View-Mode

### Version 0.11.01 + 0.11.00
Date: 2014-09-22

* Several Bugfixes for Qlik Sense Server 1.0


### **Version 0.10.0**
Date: 2014-08-26

* **Tested On:**
	* Qlik Sense Version/Desktop: 0.96
	* Qlik Sense Server: 0.95
	* Browser: Chrome + Internet Explorer 11
* **New Features**:
	* **New Components**:
		* `wi-progressbar`
	* **Snippets**:
		* Snippets for adding a progressbar
		* Snippet for using the shorthand notation for binding to a HyperCube
	* **Documentation**
		* All changes described above
		* Rebuild documentation for allowing deep-linking to specific page

### Version 0.9.03
Date: 2014-08-07

* **Tested On:**
	* Qlik Sense Version/Desktop: 0.96
	* Qlik Sense Server: 0.95
	* Browser: Chrome + Internet Explorer 11
* **New Features:**
	* New Components:
		* `wi-slider`
			* Manipulate one or two Qlik Sense variables with a slider
	* Component Improvements:
		* `wiSysInfo`
			* Returning the icon for the visualization (`visualizationTypeIcon`)
	* Documentation
		* All changes described above
	* Snippets
		* Sample snippets for `wi-slider`
* **Changes**
	* Better user experience when filtering qWidgets from a repository
* **Post-Build Fixes:**
	* 0.9.03: Added backwards compatibility for gotoSheet

### Version 0.8.00
Date: 2014-08-04

* **Tested On:**
	* Qlik Sense Version/Desktop: 0.96
	* Qlik Sense Server: 0.95
	* Browser: Chrome + Internet Explorer 11
* **New Features:**
	* Enabled support for Qlik Sense Server 0.95

### Version 0.7.20 (0.7.19)
Date: 2014-07-31

* **Qlik Sense Version:** 0.96 / Qlik Sense Desktop
* **Qlik Sense Server Support:** Not tested intensively, yet! **Will probably not work!!**
* **Browser:** Tested mainly in Chrome + Internet Explorer 11
* **New Features:**
	* New Components:
		* `wi-debug` - List the available object tree more easily
		* `wi-tab` - To create Boostrap based tab container.
	* Component Improvements:
		* `wi-sys-info` offers a new content type `visualizations` to retrieve all visualizations in the current app
		* `wi-minichart` can now also be used as an attribute.
		* `wi-bootstrap` can now also be used as an element.
		* `wi-bootstrap` is not an experimental feature anymore.
		* `wi-action`:
			* Multiple actions for the same event are now possible (separated with a semicolon)
			* New action `field.selectAll`
			* New action `field.select`
	* New **IMPORTANT** addition to the Shorthand Notation when working with HyperCubes
		* `wi.colHeaders()`
	* Ability to change the font-size in the editors (mainly meant for demonstrating qWidget using a projector)
* **Bugfixes:**
	* `wi-linked-object`
		* 100% Rewritten 
		* Will be redrawn automatically if the screen size changes
		* Removed property height and width, can now be done with 100% pure CSS
		* Solved performance issues in qWidget Edit-Mode
		* Added two advanced examples in the documentation
	* v0.7.20: in v0.7.19 the Publish dialog remains empty
* **Documentation**
	* All new features/changes/bugfixes mentioned above
	* Updated roadmap
* **New Code-Snippets**
	* Some `wi-tab` samples

### Version: 0.6.6
Date: 2014-07-14

* **Qlik Sense Version:** 0.95/0.96
* **Browser:** Tested mainly in Chrome + Internet Explorer 11
* **New Features:**
	* New Actions:
		* `variable.create`
		* `variable.setContent`
		* `field.clear`
		* `field.clearOther`
		* `field.lock`
		* `field.selectAlternative`
		* `field.selectExcluded`
		* `field.selectMatch`
		* `field.selectPossible`
		* `field.toggleSelect`
		* `field.unlock`
	* New Component:
		* `wiBootstrap` - Include Bootstrap in your qWidget (**experimental**)
* **Optimizations:**
	* Annotations are disabled in the Html- & CSS/Less-Editor (=> better performance)
* **Changes:**
	* **wi-linked-object**: `type` is now `qs` by default 
* **Bugfixes:**
	* **wi-linked-object**: Prevent self-referencing


### Version: 0.5.1
Date: 2014-07-06

* **Qlik Sense Version:** 0.95/0.96
* **Browser:** Tested mainly in Chrome + Internet Explorer 11
* **New Features:**
	* Added several new actions to **`wi-action`** (see documentation):
		* `gotoSheet`
		* `bookmark.create`
		* `bookmark.apply`
		* `bookmark.delete`
	* Tested and enabled for Qlik Sense Desktop (tested with version 0.96)

### Version: 0.4.15
Date: 2014-07-03

* **Qlik Sense Version:** 0.95
* **Browser:** Tested mainly in Chrome & Internet Explorer 11
* **Bugfixes:**
	* Fixed a major issue with styles (styles disappeared in qWidget-NormalView after some selections have been made in the document)
	* Some minor performance improvements

### Version 0.4.13
Date: 2014-07-03

* **Qlik Sense Version:** 0.95
* **Browser:** Tested mainly in Chrome & Internet Explorer 11
* **New Features:**
	* Tested with Internet Explorer 11
	* Works now for both Qlik Sense 0.90 and Qlik Sense Desktop 1.0 (0.96)
	* Component **`wi-linked-object`** to embed existing objects into your qWidget
	* Component **`wi-sys-info`** to retrieve system meta data from the QIX engine (like a list of apps, sheets, objects, bookmarks, etc.)
* **Documentation:**
	* Documentation for `wi-linked-object`
	* Documentation for `wi-sys-info`
* **New Snippets:**
	* "Working with HyperCubes: Shorthand Notation Examples"
* **Bug Fixes:**
	* Major performance improvements
	* Fixed memory leak in qWidget-Editor when working either a long time or with large Html/Css code-blocks
* **Breaking Changes:**
	* Doesn't work anymore for Qlik Sense Personal Edition 0.9 (existing qWidgets from 0.9 will continue to work though)

### Version 0.3.1
Date: 2014-06-25

* **Qlik Sense Version:** 0.95
* **Browser:** Tested mainly in Chrome

### Version 0.2.0
Date: 2014-06-22

* Qlik Sense Version: 0.90
* * New Features:
	* **MediaBox** Directive for integrating web-pages and videos
* Documentation:
	* New Page: Getting Started > Positioning
		* General Positioning
		* Why JavaScript is not allowed in qWidgets
	* MediaBox Directive documentation

### Version 0.1.1
Date: 2014-06-20

* Qlik Sense Version: 0.90
* Improvements:
	* Reduced loading-time by about 25%

### Version 0.1.0
Date: 2014-06-19

* Internal Alpha

## About Versioning
### Semantic Versioning
qWidget uses Semantic Versioning: (http://semver.org/)

### New Version Notification
If you are connected to the Internet, you will be notified of new versions in the qWidget Edit-Mode.
