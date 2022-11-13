function initMap() {
    let location = {lat: 43.45285359967639, lng:-80.51334286384434};
    let opt={
        center: location,
        zoom: 14,
        disableDefaultUI: true
    }
    let voodooMap = new google.maps.Map(document.getElementById('map'), opt);
    let marker = new google.maps.Marker({
        position: location,
        map: voodooMap,
        icon: '../img/marker.png'
    });

    var info = new google.maps.InfoWindow({
        content: `
      <div class="gmap-info-window">
        <h3 class="gmap-info-window__location-name">Voodoo</h3>
        <address class="gmap-info-window__location-description">137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br> Ukraine</address>
        <ul class="site-auth">
            <li>
              <a class="gmap-info-window__link" href="tel:1-800-480-9597">
                <svg class="gmap-info-window__icon-phone">
                  <use href="./img/sprite.svg#phone"></use>
                </svg>1-800-480-9597
              </a>
            </li>
            <li>
              <a class="gmap-info-window__link" href="mailto:info@voodoo.com"
                ><svg class="gmap-info-window__icon-mail">
                  <use
                    href="./img/sprite.svg#mail"
                  ></use></svg
                >info@voodoo.com</a
              >
            </li>
          </ul>
      </div>
      `
    })
    marker.addListener('click', function(){
        info.open(voodooMap, marker)
    })
}