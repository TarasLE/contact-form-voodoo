function initMap() {
    var opt={
        center: {lat: 43.45285359967639, lng:-80.51334286384434},
        zoom: 14,
        disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById('map'), opt)
}