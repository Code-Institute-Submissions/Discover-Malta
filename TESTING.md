# Validation 

### CSS:

* Tested using the [Jigsaw Validator](https://jigsaw.w3.org/css-validator/).
    * One error found under ".navbar .navbar-brand" line 60 was a font weight set at 700px. 
    This gave an error as the imported font used was already 700px. This has been removed.
    * No further errors present once checked again.

### HTML:

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

### Javascript:

* Tested using [JSHint](https://jshint.com/).

#### Script.js:

* No errors.
* Warnings for unnecessary semicolons on lines 9 and 15. These have been removed.

#### Maps.js:

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

#### EmailJS :

* No errors.
* Undefined & unused variables:
    * emailjs 
    * sendMail 
        * No changes made to these as these have been taken directly from the documentation for EmailJS.

# User Stories Testing

### User Stories:

#### Site Visitor:

1. As a site visitor, I wanted to learn about various places in Malta to help me decide where to go.
2. As a site visitor, I wanted to see pictures of Malta and the places referenced.
3. As a site visitor, I wanted to see a map with various places.
4. As a site visitor, I wanted to be able to ask questions about my planned visit and get recommendations.

#### Site Owner:

1. As the site owner, I wanted to provide useful informaiton to site visitors to help them learn about Malta and where they could visit.
2. As the site owner, I wanted to show images of Malta and the various places references on the site.
3. As the site owner, I wanted to include a map for users to look up and see various areas and attractions.
4. As the site owner, I wanted to user to be able to get in touch if they had questions or if they were looking for recommendations for their trip.

### Solution Provided For User Story Demands:

* Information is given on popular areas and attractions in Malta.
* There is a full screen background image shown when the user visits the site and images are shown for each of the aeras and attractions which can be clicked and viewed in a gallery.
* A searchbox allows users to search for a place which is then shown on the map. The map also has pre determined amrkers that match the areas and attractions shown on the site. 
* The user can send a message through the contact form if they had any questions.

### User Ineraction:

* When first opening the site the user can see a fullscreen background image and a callout that explains the use of the site. 
* The user can either scroll down or use the navigation bar links to see more of the site. 
* The "About" section tells the user about Malta and the other islands in the archipelago.
* The "Recommendations" sections tells the user the site can help them find where they would like to go. 
It also tells them the markers on the map relate to the places mentioned below the map and that theu can also search using the search box.
* In "Popular Areas" and "Popular Attractions" in this section the user can see six of each with images of each one. 
If they want to find out more they can press the "find out more" button and a description will be displayed. The user can also select an image and it will show a gallery view of the images.
* In the "Contact" section a description is given telling the user to get in touch if they have questions or would like recommendations. The user can send a message by the form. 
The user will know if their message is sent correctly as an alert will appear. An alert will also appear if they nessage does nto send and advsies them to try again. When the user clicks "OK" on these alerts the page is refreshed.
* The user can also view various social media sites by selecting the icons in the footer which will bring them to the site in a new browser window.
* When the user scrolls down or moves to a section that is not "Home" a button appears on the bottom right which allows them to return to the top.