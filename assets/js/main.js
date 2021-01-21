function init(){
    initAutocomplete();
    initMap();
}

// autocomplete search bar 

let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete (
        document.getElementById('search'),
        {
            types: ['establishment'],
            componentRestrictions: { 'country': ['MT']},
            fields: ['place_id', 'geometry', 'name']
        });
}

