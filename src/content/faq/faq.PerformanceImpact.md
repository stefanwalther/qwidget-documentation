---
area: faq
title: Performance Impact
---

You are may be asking yourself, if this concept does also work with high-volume applications?

This is an absolutely legitimate question. To be honest, there was not enough time to work on extensive performance tests, but since the conceptual approach of qWidget is using the same technologies as the Standard Sense Client, there should not be much difference.

Sure - and very likely - performance needs to be tuned and performance-tuning is on the todo-list, but the primary focus - as of now - is to add basic functionality into this concept/prototype; and there are a lot of ideas how to extend the functionality and therefore the use cases for qWidgets.

## Known Issues
### Editor becomes slow
You may realize that there is a big difference between the "Normal View" and "Editing Mode" when it comes to judge performance of qWidget. Especially if you are working with a complex qWidget, which results into large HTML/CSS strings, the Widget Editor becomes sometimes quite slow by time.

It helps to save ("Apply") your current state, save the properties and refresh the browser (F5).

### Tables are slow
In contrary to the table object in the Qlik Sense Client, much more data is sent to the client if you are using tables in qWidget (basically 10.000 *cells*).
Since this can cause performance problems with larger apps/tables, this is definitely one of the areas to be improved in qWidgets.
