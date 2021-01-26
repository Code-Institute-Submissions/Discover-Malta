// Some of the below code has been taken directly from the documentation for Google Places API. I have made some changes for it to suit my requirements.

function initMap(){ 

    // Set the map centered on the Maltese Archipelago
    const malta = { lat: 35.9440174, lng: 14.3795242 };
    const map = new google.maps.Map(document.getElementById("map"), { 
        center: malta,
        zoom: 10,
    });

    // Set the search box to use autocomplete and restrict the results to Malta only. "MT" is the entire archipelago
    const input = document.getElementById("pac-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setComponentRestrictions({ 
      country:["mt"]
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
}
