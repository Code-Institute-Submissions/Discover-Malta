# Discover Malta

This is a website created to help users who are interested in visitng Malta on holiday find out about the island, popular places there and attractions to see.

It provides information on areas and attractions and also includes a number of images of the varipus places mentioned.

It also includes a map with pre determined markers they can view as well as an autocomplete search box they can use to search places.

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

* The bavigation bar is always shown to the user when scrolling on all devices.
* The name of the site as well as the navigation links inscrease in size when a mouse is hovered over on desktop.
* The name of the site can be clicked and it will return the user to the top of the page.
* As it is a one page site the navigation links scroll the user down or up depening on which selection is made. An offset has been included in this so the navigation bar does not cover part of the section once it is scrolled to.
* The navigation links reference each section of the site.
* The navigation links are shown in a burger menu on screen sizes of 991px and under.

### Footer:

* The footer provides links to social media pages for the site with icons representing each site.
* The icons change from white to red and grow in size when hovered over on desktop.
* The icons are hidden when a screen reader is used.
* The icons open to the relevant website in a new browser tab.

### Scroll To Top Button

* A small button is shown in the bottom right corner that when clicked, will scroll the site back to the top.
* The button has an upward arrow icon to make it clear to the user what it is for.
* The button appears once the user scrolls 20px downward.

### Home:

* A background image is shown to the user which takes up 100vh on all devices.
* A small jumbotron is shown in the middle of the background image that depicts the site name and text telling the user the the site can help them find holiday ideas.
* The background colour of the jumbotron is an opaque version of the red used throughout the site. Opacity was set so that the photo underneath is still visible.

### About:

* This section was included to tell the user some information about Malta and the other islands.

### Recommendations:

This section of the site is split into three.

#### Map And Search Box:

* The user can use the search box to look up places in Malta. It autocompletes the search when the user types.
* When a user selects a place that was searched the map shows them a marker on that place with it's name and address.
* The map shows the Matltese archipelago to the user.
* The map can be made fullscreen and the user can zoom in and out.
* There are set markers on the map that relate to the places mentioned in the sections below it.

#### Popular Areas:

* This section shows six popular areas to the user.
* Images of each can be seen.
* Clicking on these images brings up a gallery view and the user can use buttons to go through them.
* Clicking the "find out more" button shows the user information about the area.
* The button increases in size when the hovered over by a mouse on deskptop.

#### Popular Attractions: 

* This section shows 6 popular attractions to the user.
* Images of each can be seen.
* Clicking on these images brings up a gallery view and the user can use buttons to go through them.
* Clicking the "find out more" button shows the user information about the attraction.
* The button increases in size when the hovered over by a mouse on deskptop.

### Contact:

* A form is given for the user to send a message.
* Somes text gives the user reasons why they might want to reach out.
* Name, email, phone and message are required inputs.
* Date of arrival and departure are optional and can be used by the user to ask specific questions relating to when they will be there.
* The "send message" button increases in size when the hovered over by a mouse on deskptop.
* When a message is sent an alert shows telling the user their message has been sent and they will hear soon.
* Clicking "OK" on the alert refreshes the page.

### Future Features:

In the future I would like to add the following features to the site:

* An option for the user to look up & book flights and hotels.
* An option for the user to sign up to a newsletter/blog where they could receive emails about what is going on in Malta.
* An events calendar section for a user to see when events such as concerts, festivals etc are taking place.
* More options for using the map to use a button to select options like hotels, parks etc and these would then be marked on the map.

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

This site uses two APIs from the Google Devlopers Console as well as EmailJS:

1. [Google Places API](https://developers.google.com/places/web-service/overview):
    * Used to implement a search box where the user can search for places in Malta. 
    * The search box has an auto complete feature and is also restricted so the user will only be able to search in Malta. 
    * When a place is searched and selected some information is shown on the map marker: name and address.

2. [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview):
    * Used to create the map.
    * Map shows the user the Maltese archipelago based on coordinates entered.
    * Some markers are pre-set for the user to see and related to areas and attractions mentioned on the site. 
    Marker clusters were used so that if multiple markers are near each other they are clustered together until the user zooms in.

3. [EmailJS](https://www.emailjs.com/)
    * Used to allow to user to send a message through the contact form.

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

# Testing 

All testing information can be located in the [TESTING.md](https://github.com/HollyC7/Discover-Malta/blob/master/TESTING.md) file.

# Deployment 

The website was developed using Gitpod which is a cloud based IDE.

This was committed to git and pushed to GitHub using Gitpod's built in git function.

The following steps were carried to deploy the website to [GitHub Pages](https://hollyc7.github.io/Discover-Malta/) from the [GitHub repository](https://github.com/HollyC7/Discover-Malta).

1. Open the repository in GitHub HollyC7/Discover-Malta.
2. Select Settings from the options at the top of the page and scroll down to the GitHub pages section.
3. From Source select the "master" branch from the dropdown list and select "save".
4. Once this has been selected the page is automatically refreshed and the site has been deployed.
5. Navigate back to the GitHub Pages section to obtain the URL for the deployed site.

### How To Run This Project With Gitpod:

1. Open the repository in GitHub HollyC7/Discover-Malta.
2. Click the green "code" button on the top right.
3. Copy the url: https://github.com/HollyC7/Discover-Malta.
4. Paste the url into the url bar of a new tab.
5. Add gitpod.io/# to the start of the url copied from GitHub.
6. A new workspace will open

### How To Run This In A Local IDE: 

1. Open the repository in GitHub HollyC7/Discover-Malta.
2. Click the green "code" button on the top right.
3. Copy the URL from the HTTPS section.
4. Open the terminal in your local IDE.
5. Change your current working directory to where you want the cloned file to be saved.
6. Type git clone and the URL you coped from GitHub.
7. Press enter and your local clone will be created.

### Fork The Project:

Forking the project allows you to make a copy of the project in your own GitHub repository. You will then be able to use it and make changes without changing the original.

1. Log in to GitHub.
2. Open the repository HollyC7/Discover-Malta.
3. On the top right located under your profile icon, select "fork".
4. There will not be a copy in your own repository.

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
* [Wikipedia](https://en.wikipedia.org/wiki/Saluting_Battery_(Valletta)) for written content for Saluting Battery.
* [Wikipedia](https://en.wikipedia.org/wiki/Popeye_Village) for written content about the Popeye Village.
* [Wikipedia](https://en.wikipedia.org/wiki/%C4%A6a%C4%A1ar_Qim) for written content for Ħaġar Qim.
* [Visitmalta.com](https://www.visitmalta.com/en/about-malta) for written content in the "About Malta" section.

### Media:

* [Medium.com](https://medium.com/@lscmalta/ten-reasons-to-study-in-malta-in-2018-89dfa1d3dcb1) for the hero image seen when first opening the site.
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
* [Font Awesome](https://fontawesome.com/) for various icons.

### Resources:

* My other project [Elite Fitness](https://github.com/HollyC7/EliteFitness) was a useful reference when beginning development of this site to see how the code should eb written as well as the README and TESTING file.
* The Code Institute [Gitpod template](https://github.com/Code-Institute-Org/gitpod-full-template) that installs useful tools into Gitpod.
* Stackoverflow for how to do certain aspects of the site.
* W3Schools for how to do certain aspects of the site.
* Code Insitute course material for making the site and using Javascript and APIs.
* Bootstrap documentation for tips on how to use Javascript.
* JQueryUI documentation for tips on how to use certain functions.
* Codepen.io to see how to add a scroll to top button.
* Medium for an article on adding smooth scrolling to anchor points.

# Acknowledgements

* The Code Institute slack community for advice and feedback.
* Tutor support for their advice.
* My mentor for their advice and feedback.

