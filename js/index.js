(function() {

    var app = {

        // carte interactive Carole, Julien
        initmap: function() {
            var map = new L.Map('cdf_map');
            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
            var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

            map.setView(new L.LatLng(43.1083, 0.7234), 14);
            map.addLayer(osm);

            //var vert
            //var vert-foncé
            var ocre = L.circle([43.108053, 0.725208], 5, {
            color:'#DD985C', fillColor:'f01',fillOpacity: 0.5
            }).addTo(map);

        //     $(ocre).on("click", function(){
        //     console.log("OK!") 
        //     L.responsivePopup().setContent('Coucou.<br>Ça va?').addTo(map).bindPopup();
        // });

            var circle = L.circle([43.108053, 0.725208]).addTo(map);
            $(circle).on("click", function(){
            console.log("OK!") 
            circle.bindPopup("<b>Hello world!</b><br><br>I am a popup.").openPopup();
            //(Placeholder.disable["()"])
        });
        }






        // phototheque Odile, Aymeric




        // admin David





    };
    app.initmap();
})();