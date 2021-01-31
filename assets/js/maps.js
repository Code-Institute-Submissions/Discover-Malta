// Some of the below code has been taken directly from the documentation for Google Places API. I have made some changes for it to suit my requirements.

function initMap() {

    // Set the map centered on the Maltese Archipelago
    const malta = { lat: 35.9440174, lng: 14.3795242 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: malta,
        zoom: 10,
    });

    // Creating the sutocomplete search and info widnows displayed 
    // Set the search box to use autocomplete and restrict the results to Malta only. "MT" is the entire archipelago

    const input = document.getElementById("pac-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setComponentRestrictions({
        country: ["mt"]
    });

    // Set the information found and returned in the info window that pops up once a place is searched for 

    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();

        // if the place searched does not exist the below is returned 
        if (!place.geometry) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
        };

        //if place searched exists show on the map 
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        let address = "";

        if (place.address_components) {
            address = [
                (place.address_components[0] &&
                    place.address_components[0].short_name) ||
                "",
                (place.address_components[1] &&
                    place.address_components[1].short_name) ||
                "",
                (place.address_components[2] &&
                    place.address_components[2].short_name) ||
                "",
            ].join(" ");
        }
        infowindowContent.children["place-icon"].src = place.icon;
        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-address"].textContent = address;
        infowindow.open(map, marker);
    });

    // Creating marker clusters for recommended places, followed along with the course videos & API documentation
    // Array of characters to be used as the map labels
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Locations shown are the places from the trip recommendations section
    // Places searched in the site's search box and img tag copied and added into the below
    const locations = [
        { 
            lat: 35.898907, 
            lng: 14.514553, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Valletta</strong>` 
        }, // Valletta
        { 
            lat: 35.884430, 
            lng: 14.403160, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Mdina</strong>` 
        }, // Mdina
        { 
            lat: 35.913760, 
            lng: 14.489910, info: 
            `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Saint Julians</strong>` 
        }, // Saint Julians
        { 
            lat: 35.841240, 
            lng: 14.545070, info: 
            `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Marsalokk</strong>` 
        }, // Marsalokk
        { 
            lat: 36.012936, 
            lng: 14.334650, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Comino</strong>` 
        }, // Comino
        { 
            lat: 36.043547, 
            lng: 14.251807, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Gozo</strong>` 
        }, // Gozo
        { 
            lat: 35.897676, 
            lng: 14.512664, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_general-71.png" width="16" height="16" id="place-icon"> <strong>St. John's Co Cathedral</strong>` 
        }, // St. John's Co Cathedral
        { 
            lat: 35.891736, 
            lng: 14.518429, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" width="16" height="16"> <strong>Fort St. Angelo</strong>` 
        }, // Fort St. Angelo
        { 
            lat: 36.014029, 
            lng: 14.323465, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" width="16" height="16"> <strong>Blue Lagoon</strong>` 
        }, // Blue Lagoon
        { 
            lat: 35.894595, 
            lng: 14.512602, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png" width="16" height="16"> <strong>Saluting Battery</strong>` 
        }, // Saluting Battery
        { 
            lat: 35.960818, 
            lng: 14.341395, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_171/generic_business-71.png" width="16" height="16"> <strong>Popeye Village</strong>` 
        }, // Popeye Village
        { 
            lat: 35.827626, 
            lng: 14.442296, 
            info: `<img src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png" width="16" height="16"> <strong>Ħaġar Qim</strong>` 
        }, // Ħaġar Qim
    ];

    // Creating an info window for the set markers
    // Below code found on a Stack Overflow page, linked in README file

    const infoWin = new google.maps.InfoWindow();

    // Add the markers
    const markers = locations.map(function (location, i) {
        const marker = new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });

        // Add listener for when marker is clicked
        google.maps.event.addListener(marker, 'click', function () {
            infoWin.setContent(location.info);
            infoWin.open(map, marker);
        })
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    const markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

};