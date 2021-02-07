# Validation 

### CSS 

* Tested using the [Jigsaw Validator](https://jigsaw.w3.org/css-validator/).
    * One error found under ".navbar .navbar-brand" line 60 was a font weight set at 700px. 
    This gave an error as the imported font used was already 700px. This has been removed.
    * No further errors present once checked again.

### HTML 

* Tested using the [W3C Validator](https://validator.w3.org/).
    * A few errors were found:
        * An id attribute on line 117 contained a white space. 
        A bootstrap class had been added with the id. This was removed.
        * A src attribute on line 123 was empty. 
        This was fixed by adding "#" as there was nothing in here initially as it was taken from the Google Maps Javascipt API documentation.
        * An img element on line 123 did not have an alt attribute. This was added.
        * A label on line 455 did not have the correct value for the "for" attribute. This was changed.
        * A label on line 459 did not have the correct value for the "for" attribute. This was changed.
    * No further errors present after running again.

### Javascript

* Tested using [JSHint](https://jshint.com/).

#### Script.js 

* No errors.
* Warnings for unnecessary semicolons on lines 9 and 15. These have been removed.

#### Maps.js

* No errors.
* Warnings: 
    * Line 38 unnecessary semicolon. This has been removed. 
    * Line 154 was missing a semicolon. This has been added.
    * Line 163 unnecessary semicolon. This has been removed. 
* Undefined & unused variables:
    * google 
    * MarkerClusterer
    * markerCluster  
    * initMap 
        * No changes made to these as these have been taken directly from the documentation for the Google Maps Javascript API and Google Places API.