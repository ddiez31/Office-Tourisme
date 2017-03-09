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

    });
})();