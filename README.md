# Discover Malta

This is a website created to help users who are interested in visitng Malta on holiday find out about the island, popular places there and attractions to see.

It provides information on cities, attractions and culture and also includes a number of images of the varipus places mentioned.

I chose to create this website as I have visited Malta previously and it was a holiday I really enhjoyed and I plan to visit there again in the future.

# User Experience (UX)

### User Stories:

#### Site Visitor:

1. As a site visitor, I wanted to learn about various places in Malta to help me decide where to go.
2. As a site visitor, I wanted to see pictures of Malta and the places referenced.
3. As a site visitor, I wanted to see a map with various places.
4. As a site visitor, I wanted to be able to ask questions about my planned visit and get recommendations.

#### Site Owner:

1. As the site owner, I wanted to provide useful informaiton to site visitors to help them learn about Malta and where they could visit.
2. As the site owner, I wanted to show images of Malta and the various places references on the site.
3. As the site owner, I wanted to include a map for users to see hotels, restaurants and tourist attractions in the area they are looking at.
4. As the site owner, I wanted to user to be able to get in touch if they had questions or if they were looking for recommendations for their trip.

### Wireframes:

* [Desktop](https://github.com/HollyC7/Discover-Malta/blob/master/wireframes/discover-malta-wireframes-desktop.pdf)
* [Tablet](https://github.com/HollyC7/Discover-Malta/blob/master/wireframes/discover-malta-wireframes-tablet.pdf)
* [Mobile](https://github.com/HollyC7/Discover-Malta/blob/master/wireframes/discover-malta-wireframes-mobile.pdf)

#### Deviations From Wireframes On Final Site:

* A one page site instead of seperate pages seemed to work better. The navigation bar scrolls to each section of the page.
* Main image takes up 100vh. I felt this looked better once I had created this section and left it like this for all screens.
* A one page site instead of seperate pages seemed to work better. The navigation bar scrolls to each section of the page.
* A scroll to top button was added for the user to be able to return to the top easily.
* "Places" was initially showing cities the suer could choose form which would show a new oage with the details, 
on mentor advice instead of having a seperate "Places" I changed "Ideas For Your Trip" to incorporate some of these aspects like the map and split the cards and content into areas and attractions instead of culture, nightlife & attractions.
* Button on Jumbotron not incldued as a seperate "Places" page was not included as this is now a one page site. I felt with the short scroll down as well as the navigation bar there was no need.
* Footer does not link to the "Places" page as it was not included.
* No section before the footer about the website, this is covered by the Jumbotron and the content above the map in "Ideas For Your Trip"
* The section "About Malta" was added.

### Colour Palette:

I wanted the colour of the Maltese flag to feature frequently across the site. I chose two white variations for a contrast to use in background and the navigation bar as well as a shade of black for the footer.

![Colour palette used](https://github.com/HollyC7/Discover-Malta/blob/master/assets/images/discover-malta-colour-palette.png)

### Font: 

* "Dancing Script" was used for all headers as well as the name of the site and the navigation bar links. I felt the style of this font suited the look of the site.
* "Roboto" was used for all other text on the site as I felt it was easy to read and complimented the font used for headings.

# Features

This is a fully responsive website that allows the user to use any device to view it and find out about places and things to see in Malta.

![Image of site on multiple devices](https://github.com/HollyC7/Discover-Malta/blob/master/assets/images/discover-malta-responsive-design.JPG)

### Navigation Bar:

### Footer:

### Home:

### Locations:

### Contact:

### Future Features:

In the furture I would liek toa dd the following features to the site:

* An option for the user to look up & book flights and hotels.
* An option for the user to sign up to a newsletter/blog where they could receive emails about what is going on in Malta.
* An events calendar section for a user to see when events such as cocnerts, festivals etc are taking place.

# Technologies Used 

* HTML
* CSS 
* JavScript 
* [JQuery](https://jquery.com/)
* [JQueryUI](https://jqueryui.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/) used to find font I used in the site.
* [Resizeimage.net](https://resizeimage.net/) used to crop and resize images used. 
* [Font Awesome](https://fontawesome.com/) for various icons.
* [Google Developers Console](https://console.developers.google.com/) to get the APIs used on the site.
* [Latlong.net](https://www.latlong.net/) to find the latitude and longitude for Malta and the map markers.
* [Favicon.io](https://favicon.io/favicon-generator/) to create the image used for the favicon.
* [Favicon-generator.com](https://www.favicon-generator.org/) to turn the image into a favicon.
* [Fancybox](https://fancyapps.com/fancybox/3/) to create an image gallery.
* [Am I Responsive?](http://ami.responsivedesign.is/) to show the site on multiple devices.

### APIs

This site uses two APIs from the Google Devlopers Console:

1. [Google Places API](https://developers.google.com/places/web-service/overview):
    * Used to implement a search box where the user can search for places in Malta. 
    * The search box has an auto complete feature and is also restricted so the user will only be able to search in Malta. 
    * When a place is searched and selected some information is shown on the map marker: name and address.

2. [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview):
    * Used to create the map.
    * Map shows the user the Maltese archipelago based on coordinates entered.
    * Some markers are pre-set for the user to see and related to areas and attractions mentioned on the site.

### Bootstrap Version Issue

Initially I created this site using Bootstrap version 5 as this is the version shown when accessing the Bootstrap site. 

However during the development of the site I realised there was an issue with the burger menu not working. I thought this was due to the order of my script tags however nothing I did at the time worked.

I read into this and found that Bootstrap 5 does not support Jquery. More on this [here](https://b862579c-57d6-4a95-a6a3-fa6a3cebd8b4.ws-eu03.gitpod.io/#/workspace/Discover-Malta). 

I was unsure of how to proceed and changed my Bootstrap Javascript to version 4.6. This resulted in the burger menu working as intented.

I then changed the Bootstrap CSS file to version 4.6 also. 

Changing versions caused some issues with the site and the following had to be done:

* I fixed the grid layout of "Ideas For Your Trip" as I had not used containers at the time and this caused the grid to not work once the Bootstrap version was changed.
* The padding on col classes was different and caused the cards in "Ideas For Your Trip" to not fit as nicely as before. To fix this I rewrote the code for the section and added spacing as necessary after.
* Spacing classes such as pt-2 etc were slightly different so I updated these also.
* I had followed a [tutorial](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) from W3Schools to implement a scroll to top button which did not work after changing the Bootstrap version. I found another [code snippet](https://codepen.io/michalwyrwa/pen/GBaPPj) for this instead.
* H3 used in the cards under "Ideas For Your Trip" were changed to H4 as the font-size of these was too big.

# Deployment 

### How To Run This Project With Gitpod:

### How To Run This In A Local IDE: 

### Fork The Project:

# Credits

### Code:

* [Hover:CSS](https://ianlunn.github.io/Hover/) classes have been added to my own CSS file for additional styling.
* [Bootstrap](https://getbootstrap.com/) classes have been used throughout this site. 
* [Google Places API](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-multiple-countries) "Places Autocomplete Restricted To Multiple Countries" example was used as a template for my search.js file. I changed some of the code to suit what I needed.
* [Stack Overflow](https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow) followed this to add info window when set markers in markerclusterer are clicked.
* [Codepen.io](https://codepen.io/michalwyrwa/pen/GBaPPj) for tutorial on adding a scroll to top button.
* [Medium.com](https://medium.com/@pacific880/learn-to-make-one-page-scroll-navigation-b97ab42ef6fa for tutorial on adding smooth scrolling to anchor points on site with fixed navbar.
* [JqueryUI](https://jqueryui.com/datepicker/#default) for the datepicker used in contact form.
* [Stack Overflow](https://stackoverflow.com/questions/21247674/refresh-the-page-when-the-ok-alert-button-is-clicked) for tutorial on getting the page to refresh once the user selects "ok" on alert box after form is submitted.
* [Stack Overflow](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click) for tutorial on collapsing the burger menu when a link is clicked.

### Content:

* [Wikipedia](https://en.wikipedia.org/wiki/Valletta) for written content about Valletta.
* [Wikipedia](https://en.wikipedia.org/wiki/Mdina) for written content about Mdina.
* [Wikipedia](https://en.wikipedia.org/wiki/St._Julian%27s,_Malta) for written content about Saint Julian's.
* [Wikipedia](https://en.wikipedia.org/wiki/Marsaxlokk) for written content about Marsalokk.
* [Wikipedia](https://en.wikipedia.org/wiki/Gozo) for written content about Gozo.
* [Wikipedia](https://en.wikipedia.org/wiki/Comino) for written content about Comino.
* [Wikipedia](https://en.wikipedia.org/wiki/Saint_John%27s_Co-Cathedral) for written content for St. Johns Co Cathedral.
* [Wikipedia](https://en.wikipedia.org/wiki/Fort_St._Angelo) for written content for Fort St. Angelo.
* [Maltauncovered.com](https://www.maltauncovered.com/comino-island/blue-lagoon/) for written content on the Blue Lagoon.
* [Wikipedia](https://en.wikipedia.org/wiki/Saluting_Battery_(Valletta) for written content for Saluting Battery.
* [Wikipedia](https://en.wikipedia.org/wiki/Popeye_Village) for written content about the Popeye Village.
* [Wikipedia](https://en.wikipedia.org/wiki/%C4%A6a%C4%A1ar_Qim) for written content for Ħaġar Qim.
* [Visitmalta.com](https://www.visitmalta.com/en/about-malta) for written content in the "About Malta" section.

### Media:

* [Britannica.com](https://www.britannica.com/place/Valletta) for the image of Valletta.
* [Itinari.com](https://www.itinari.com/mdina-the-silent-city-of-malta-avr7) for the image of Mdina.
* [Tvm.com.mt](https://www.tvm.com.mt/en/wp-content/uploads/sites/2/2019/02/paceville-st-julians-aerial-malta.png) for the image of Saint Julian's.
* [Chevron.co.uk](https://www.chevron.co.uk/exploremalta/placestovisit/marsaxlokk-malta) for the image of Marsalokk.
* [Wikimedia](https://commons.wikimedia.org/wiki/File:Xlendi_Bay_Gozo_Malta_2014_1.jpg) for the image of Xlendi Bay, Gozo.
* [Life2part.com](https://lifepart2.com/visit-comino-island-and-blue-lagoon-in-malta/) for the image of the Blue Lagoon, Comino.
* [The Saint John](https://thesaintjohnmalta.com/things-to-do-malta/history-culture/st-johns-co-cathedral/) for the image of St John's Co Cathedral.
* [Wikipedia](https://en.wikipedia.org/wiki/Fort_St._Angelo#/media/File:Malta_-_Birgu_-_Fort_Saint_Angelo_(Upper_Barrakka_Gardens)_01_ies.jpg) for the image of Fort St. Angelo.
* [Obonparis.com](https://www.obonparis.com/en/magazine/blue-lagoon-comino-malta) for the image of the Blue Lagoon.
* [Encirclephotos.com](https://www.encirclephotos.com/image/saluting-battery-in-valletta-malta/) for image of the Saluting Battery
* [Thesabaticalguide.com](https://thesabbaticalguide.com/popeye-village-malta/) for image of the Popeye Village.
* [Britannica.com](https://www.britannica.com/topic/megalith) for the image of Ħaġar Qim.
* Icons used on set map markers are taken from the image tag found when using the autocomplete search for that place on my site.
* [Am I Responsive?](http://ami.responsivedesign.is/) to show the site on multiple devices.
* [Favicon.io](https://favicon.io/favicon-generator/) was used to create the image used for the favicon by adding text and changing the colour and [Favicon-generator.com](https://www.favicon-generator.org/) was used to turn the image into a file to be used.

### Resources:

# Acknowledgements


