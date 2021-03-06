---
area: faq
title: The Repository Concept
---

The idea behind the Repository Concept is to share a library of visualizations based on the qWidget concept 

* Across Qlik Sense apps
* Across Qlik Sense deployments
* Even across a potential large group of people (e.g. all Qlik-employees in this internal Alpha)

Furthermore, everybody has the possibility to

* Share his qWidgets with colleagues
* Bookmark qWidgets
* Rate qWidgets

## Access to the qWidget-Repository

Access to the qWidget-Repository is only possible if you register a new account.

## Installing your own qWidget-Repository
As you will see in the qWidget-Loader it is possible to have multiple repositories available from within the qWidget extension.
Having mentioned that, it is therefore possible to set up a qWidget-Repository for example also within the intranet of a customer and setting up a repository of visualizations.

### Technical Information
The qWidget-Repository is based on the following technologies:

* MEAN stack
	* **M**ongoDB
	* **E**xpress
	* **A**ngularJS
	* **N**ode.js

## Why not using the Qlik Sense Repository ?
It would certainly make sense to store shared qWidgets in the Qlik Sense Server Repository. As soon as the Repository API exposes some functionality to extend the repository and save custom objects/values there, this is certainly one of the next steps to go.