(function() {

    var app = {

        // carte interactive Carole, Julien
        initmap: function() {
            var map = new L.Map('cdf_map');
            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
            var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

            map.setView(new L.LatLng(43.1083, 0.7234), 16);
            map.addLayer(osm);
            

            //circuit ocre
            var Ocre = function(lat, long) {
               this.lat = lat;
               this.long = long;
               this.size = 5;
               this.color = '#FF5200';
               this.fillColor = '#FF5200';
               this.fillOpacity = 1;
           };
           var m1Ocre = new Ocre(43.108053, 0.725208);
           L.circle([m1Ocre.lat, m1Ocre.long], m1Ocre.size, { color: m1Ocre.color, fillColor: m1Ocre.fillColor, fillOpacity: m1Ocre.fillOpacity }).addTo(map);
           
           var m2Ocre = new Ocre(43.107483, 0.724824);
           L.circle([m2Ocre.lat, m2Ocre.long], m2Ocre.size, { color: m2Ocre.color, fillColor: m2Ocre.fillColor, fillOpacity: m2Ocre.fillOpacity }).addTo(map);
           
           var m3Ocre = new Ocre(43.107288, 0.724600);
           L.circle([m3Ocre.lat, m3Ocre.long], m3Ocre.size, { color: m3Ocre.color, fillColor: m3Ocre.fillColor, fillOpacity: m3Ocre.fillOpacity }).addTo(map);
           
           var m4Ocre = new Ocre(43.107448, 0.725673);
           L.circle([m4Ocre.lat, m4Ocre.long], m4Ocre.size, { color: m4Ocre.color, fillColor: m4Ocre.fillColor, fillOpacity: m4Ocre.fillOpacity }).addTo(map);
           
           var m5Ocre = new Ocre(43.107065, 0.725235);
           L.circle([m5Ocre.lat, m5Ocre.long], m5Ocre.size, { color: m5Ocre.color, fillColor: m5Ocre.fillColor, fillOpacity: m5Ocre.fillOpacity }).addTo(map);
           
           var m6Ocre = new Ocre(43.107166, 0.725182);
           L.circle([m6Ocre.lat, m6Ocre.long], m6Ocre.size, { color: m6Ocre.color, fillColor: m6Ocre.fillColor, fillOpacity: m6Ocre.fillOpacity }).addTo(map);
           
           var m7Ocre = new Ocre(43.107483, 0.725024);
           L.circle([m7Ocre.lat, m7Ocre.long], m7Ocre.size, { color: m7Ocre.color, fillColor: m7Ocre.fillColor, fillOpacity: m7Ocre.fillOpacity }).addTo(map);
           
           var m8Ocre = new Ocre(43.106316, 0.720450);
           L.circle([m8Ocre.lat, m8Ocre.long], m8Ocre.size, { color: m8Ocre.color, fillColor: m8Ocre.fillColor, fillOpacity: m8Ocre.fillOpacity }).addTo(map);
           
           var m9Ocre = new Ocre(43.106210, 0.720790);
           L.circle([m9Ocre.lat, m9Ocre.long], m9Ocre.size, { color: m9Ocre.color, fillColor: m9Ocre.fillColor, fillOpacity: m9Ocre.fillOpacity }).addTo(map);
           
           var m10Ocre = new Ocre(43.106436, 0.719825);
           L.circle([m10Ocre.lat, m10Ocre.long], m10Ocre.size, { color: m10Ocre.color, fillColor: m10Ocre.fillColor, fillOpacity: m10Ocre.fillOpacity }).addTo(map);
           
           var m11Ocre = new Ocre(43.107202, 0.722536);
           L.circle([m11Ocre.lat, m11Ocre.long], m11Ocre.size, { color: m11Ocre.color, fillColor: m11Ocre.fillColor, fillOpacity: m11Ocre.fillOpacity }).addTo(map);
           
           var m12Ocre = new Ocre(43.108430, 0.723737);
           L.circle([m12Ocre.lat, m12Ocre.long], m12Ocre.size, { color: m12Ocre.color, fillColor: m12Ocre.fillColor, fillOpacity: m12Ocre.fillOpacity }).addTo(map);
           
           var m13Ocre = new Ocre(43.109000, 0.724839);
           L.circle([m13Ocre.lat, m13Ocre.long], m13Ocre.size, { color: m13Ocre.color, fillColor: m13Ocre.fillColor, fillOpacity: m13Ocre.fillOpacity }).addTo(map);
           







           



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



            //batiments officiels
            var annexes = L.circle ([43.106970, 0.723584], 5, {
                color:'#006400',
                fillColor:'#006400',
                fillOpacity: 1
            }).addTo(map);

                /*2    L.circle ([43.108053, 0.725208], 5, {
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


                    

             $(ocre).on("click", function() { //Julien

                console.log("OK!")
                ocre.bindPopup("<h2>Hello world!</h2>"+"<br>"+'<img src="../images/1.JPG" width="200" height="150">' + '' + '<img src="../images/3.JPG" width="200" height="300">' +
                    "<br><p>I am a popup.</p>").openPopup();
            });

            // var circle = L.circle([43.108053, 0.725208]).addTo(map);
            // $(ocre).on("click", function() {
            //     console.log("OK!")
            //     ocre.bindPopup("<b>Hello world!</b><br><br>I am a popup.").openPopup();
            //     //(Placeholder.disable["()"])
            // });
        },
        // phototheque Odile, Aymeric

        // admin David

        theme: null,
        marqueur: null,
        titre: null,
        latitude: null,
        longitude: null,
        description: null,
        url: null,

        init: function() {
            console.log("init ok");
            this.url = "../data/galerie.json";
            this.listener();
        },

        listener: function() {
            console.log("listener ok");
            this.getGalerie(app.url);
        },

        getGalerie: function(url) {
            console.log("getGalerie ok");
            $.ajax({
                url: url,
                success: this.read,
                error: function() {
                    if (err) {
                        console.log(err);
                    };
                }
            });
        },

        read: function(data) {
            console.log("read ok");
            for (i = 0; i < data.ocre.length; i++) {
                console.log(data.ocre[i]);
            };
            for (i = 0; i < data.vert.length; i++) {
                console.log(data.vert[i]);
            };
            for (i = 0; i < data.annexes.length; i++) {
                console.log(data.annexes[i]);
            };
            for (i = 0; i < data.etoiles.length; i++) {
                console.log(data.etoiles[i]);
            };



            url = $(".upload").val();
            $('.send').on('click', function() {
                theme = $(".theme").val();
                marqueur = $(".marqueur").val();
                titre = $(".titre").val();
                latitude = $(".latidude").val();
                longitude = $(".longitude").val();
                description = $(".description").val();
            });


        },

        write: function() {
            console.log("write ok");
        }


    };
    app.initmap();
    app.init();
    // unitegallery
    $("#gallery").unitegallery({
        //theme options:

        theme_gallery_padding: 200, //the horizontal padding of the gallery from the sides

        //gallery options:

        gallery_theme: "tiles", //choose gallery theme (if more then one themes includes)
        gallery_width: "60%", //gallery width
        gallery_background_color: "grey", //set custom background color. If not set it will be taken from css.

        //tiles options:

        tiles_type: "justified", //must option for the tiles - justified type
        tiles_justified_row_height: 60, //base row height of the justified type
        tiles_justified_space_between: 3, //space between the tiles justified type
        tiles_set_initial_height: true, //columns type related only
        tiles_enable_transition: true, //enable transition when screen width change

        tile_overlay_opacity: 0.4,          //tile overlay opacity
        tile_overlay_color: "#000000",      //tile overlay color

        tile_enable_image_effect:false,     //enable tile image effect

        tile_enable_textpanel:true,
        tile_textpanel_title_text_align: "center",
        tile_textpanel_always_on:true,


    });



})();