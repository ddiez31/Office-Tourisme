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
        

        
          //circuit ocre
        var ocre = L.circle ([43.108053, 0.725208], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

         L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    /*3     L.circle ([43.107483, 0.724824], 5, {    
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    4    L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    5    L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    6    L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    7    L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    8    L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    9   L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);*/

        L.circle ([43.106436, 0.719825], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

    /*11  L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);*/

        L.circle ([43.108430, 0.723737], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);

        L.circle ([43.107483, 0.724824], 5, {
            color:'#DD985C',
            fillColor:'#DD985C',
            fillOpacity: 1
        }).addTo(map);


     
            //circuit vert clair


/*  A    var vert = L.circle ([43.108053, 0.725208], 5, {
            color:'#32CD32',
            fillColor:'#32CD32',
            fillOpacity: 1
        }).addTo(map);

    B    L.circle ([43.108053, 0.725208], 5, {
            color:'#32CD32',
            fillColor:'#32CD32',
            fillOpacity: 1
        }).addTo(map);

    C    L.circle ([43.108053, 0.725208], 5, {
            color:'#32CD32',
            fillColor:'#32CD32',
            fillOpacity: 1
        }).addTo(map);

    D    L.circle ([43.108053, 0.725208], 5, {
            color:'#32CD32',
            fillColor:'#32CD32',
            fillOpacity: 1
        }).addTo(map);*/



      }
            //batiments officiels
/*  1    var annexes = L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);

    2    L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);

    3    L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);

    4    L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);

    5    L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);

    6    L.circle ([43.108053, 0.725208], 5, {
            color:'#006400',
            fillColor:'#006400',
            fillOpacity: 1
        }).addTo(map);*/



    


        // phototheque Odile, Aymeric




        // admin David





    };
    app.initmap();
})();