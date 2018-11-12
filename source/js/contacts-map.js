ymaps.ready(init);

function init() {
    var mapCenter = [55.740781, 37.403357];
    var markerPosition = [55.740781, 37.408382];
    var mapElement = document.getElementById('map');
    var mapOptions = {
        center: mapCenter,
        zoom: 16,
        controls: []
    };

    var map = new ymaps.Map(mapElement, mapOptions);

    var fullscreenControlObject = new ymaps.control.FullscreenControl({
        options: {
            position: {
                top: 20,
                right: 20
            }
        }
    });

    var zoomControlObject = new ymaps.control.ZoomControl({
        options: {
            position: {
                top: 80,
                right: 20
            },
            size: 'small'
        }
    });

    var marker = new ymaps.Placemark(markerPosition, {
        iconContent: 'Мы находимся здесь',
        balloonContentHeader: 'Санитарная Эпидемиологическая Служба',
        balloonContentBody: 'г. Москва, Оршанская ул., 5'
    }, {
        preset: 'islands#redStretchyIcon'
    });

    map.controls.add(zoomControlObject);
    map.controls.add(fullscreenControlObject);
    map.geoObjects.add(marker);
}

