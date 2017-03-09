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
            var ocre = L.circle([43.108053, 0.725208], 5, {
                color: '#DD985C',
                fillColor: '#DD985C',
                fillOpacity: 1
            }).addTo(map);

            L.circle([43.107483, 0.724824], 5, {
                color: '#DD985C',
                fillColor: '#DD985C',
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

            L.circle([43.106436, 0.719825], 5, {
                color: '#DD985C',
                fillColor: '#DD985C',
                fillOpacity: 1
            }).addTo(map);

            /*11  L.circle ([43.107483, 0.724824], 5, {
                    color:'#DD985C',
                    fillColor:'#DD985C',
                    fillOpacity: 1
                }).addTo(map);*/

            L.circle([43.108430, 0.723737], 5, {
                color: '#DD985C',
                fillColor: '#DD985C',
                fillOpacity: 1
            }).addTo(map);

            L.circle([43.107483, 0.724824], 5, {
                color: '#DD985C',
                fillColor: '#DD985C',
                fillOpacity: 1
            }).addTo(map);

             $(ocre).on("click", function() {
                console.log("OK!")
                ocre.bindPopup("<b>Hello world!</b>"+"<br>"+'<img src="http://placehold.it/1000x600&text=Full+Size+Image" + style="width:100%;height:100%;margin-bottom:-3px"/>' +
                "<br>I am a popup.").openPopup();
            });


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
            console.log(data.themes);
            theme = $(".theme").val();
            marqueur = $(".marqueur").val();
            titre = $(".titre").val();
            latitude = $(".latidude").val();
            longitude = $(".longitude").val();
            description = $(".description").val();
            url = $(".upload").val();
            $('.send').on('click', function() {
                console.log(theme);

                console.log(marqueur);
            })

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

    });
})();