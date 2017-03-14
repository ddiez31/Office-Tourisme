(function() {

    var app = {
        // admin David
        init: function() {
            console.log("init ok");
            this.url = "../data/galerie.json";
            this.getGalerie(app.url);
        },

        getGalerie: function(url) {
            console.log("getGalerie ok");
            $.ajax({
                url: url,
                success: this.initmap,
                error: function() {
                    if (err) {
                        console.log(err);
                    };
                }
            });
        },

        // carte interactive Carole, Julien
        initmap: function(data) {
            var map = new L.Map('cdf_map', { fullscreenControl: true });
            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
            var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

            map.setView(new L.LatLng(43.1083, 0.7234), 16);
            map.addLayer(osm);
            map.scrollWheelZoom.disable();
            map.on('fullscreenchange', function() {
                if (map.isFullscreen()) {
                    return;
                } else {
                    map.remove();
                    app.initmap();
                }
            });

            //button pour ouvrir la galerie sur la map
            L.easyButton('galerie', function(btn, map) {
                console.log('ok');
                $("button").click(function() {
                    $("#cdf_map").remove();
                    $("#gallery").removeClass('hide');
                    app.initgallery();
                });
            }).addTo(map);


            //circuit ocre
            var latlngsOcre = [];
            for (i = 0; i < data.ocre.length; i++) {
                //marqueurs
                var Ocre = function() {
                    this.marqueur = data.ocre[i].marqueur;
                    this.size = 5;
                    this.color = '#FF5200';
                    this.fillColor = '#FF5200';
                    this.fillOpacity = 1;
                };
                var markOcre = new Ocre();
                var latOcre = data.ocre[i].geoloc.lat;
                var longOcre = data.ocre[i].geoloc.lng;
                console.log(markOcre)
                markOcre = L.circle([latOcre, longOcre], markOcre.size, { color: markOcre.color, fillColor: markOcre.fillColor, fillOpacity: markOcre.fillOpacity }).addTo(map);
                //popup
                $(markOcre).on("click", function() {
                    markOcre.bindPopup("<h2>Hello world!</h2>" + "<br>" + '<img src="../images/1.JPG" width="200" height="150">' + '' + '<img src="../images/3.JPG" width="200" height="300">' +
                        "<br><p>I am a popup.</p>").openPopup();
                    console.log("OK!")
                });
                //sentier
                // var lg = data.ocre[i].sentier.lng;
                latlngsOcre.push([latOcre, longOcre]);
            };
            latlngsOcre.push([data.ocre[0].geoloc.lat, data.ocre[0].geoloc.lng]);
            var polyline = L.polyline(latlngsOcre, { color: '#FF5200' }).addTo(map);


            //circuit vert clair
            // var latlngsVert = [];
            for (i = 0; i < data.vert.length; i++) {
                //marqueurs
                var Vert = function() {
                    this.marqueur = data.vert[i].marqueur;
                    this.size = 5;
                    this.color = '#00AB39';
                    this.fillColor = '#00AB39';
                    this.fillOpacity = 1;
                };
                var markVert = new Vert();
                var latVert = data.vert[i].geoloc.lat;
                var longVert = data.vert[i].geoloc.lng;
                markVert = L.circle([latVert, longVert], markVert.size, { color: markVert.color, fillColor: markVert.fillColor, fillOpacity: markVert.fillOpacity }).addTo(map);
                //popup

                //sentier
                // latlngsVert.push([latVert, longVert]);
            };
            // latlngsVert.push([data.vert[0].geoloc.lat, data.vert[0].geoloc.lng]);

            var latlngsVert = [
            [43.106140, 0.720790],
            [43.104530, 0.719075],
            [43.104364, 0.718895],
            [43.104235, 0.718726],
            [43.104078, 0.718528],
            [43.103931, 0.718348],
            [43.103810, 0.718187],
            [43.103401, 0.717675],
            [43.102745, 0.716860],
            [43.102385, 0.716410],
            [43.101957, 0.715867],
            [43.101626, 0.715449],
            [43.101434, 0.715199],
            [43.101238, 0.715004],
            [43.100962, 0.714743],
            [43.100698, 0.714518],
            [43.099803, 0.713834],
            [43.099734, 0.713775],
            [43.099654, 0.713710],
            [43.099488, 0.713413],
            [43.099323, 0.713027],
            [43.099253, 0.712665],
            [43.099230, 0.712434],
            [43.099221, 0.712182],
            [43.099208, 0.711887],
            [43.099217, 0.711707],
            [43.099247, 0.711538],
            [43.099298, 0.711383],
            [43.099390, 0.711230],
            [43.099570, 0.711141],
            [43.099703, 0.711069],
            [43.100455, 0.710978],
            [43.101810, 0.710870],
            [43.102856, 0.710760],
            [43.103671, 0.710674],
            [43.103871, 0.710760],
            [43.103981, 0.710814],
            [43.104101, 0.710809],
            [43.104228, 0.710742],
            [43.104353, 0.710634],
            [43.104522, 0.710452],
            [43.104557, 0.710412],
            [43.104610, 0.710430],
            [43.105017, 0.710436],
            [43.105947, 0.710412],
            [43.106190, 0.710326],
            [43.106488, 0.710096],
            [43.107000, 0.709710],
            [43.107414, 0.709531],
            [43.108128, 0.709348],
            [43.108170, 0.709109],
            [43.108289, 0.709066],
            [43.108503, 0.709058],
            [43.108684, 0.708875],
            [43.108684, 0.708986],
            [43.108607, 0.709332],
            [43.107484, 0.709646],
            [43.107062, 0.709818],
            [43.106202, 0.710461],
            [43.105945, 0.710558],
            [43.105679, 0.710571],
            [43.105164, 0.710547],
            [43.104518, 0.710517],
            [43.104485, 0.710558],
            [43.104466, 0.711118],
            [43.104616, 0.712789],
            [43.104741, 0.713664],
            [43.104925, 0.714281],
            [43.105197, 0.715230],
            [43.106263, 0.718655],
            [43.106436, 0.719725]
                /*[43.105065, 0.719648],
                [43.099973, 0.710764],
                [43.105457, 0.709841],
                [43.108684, 0.708875],
                [43.105065, 0.719648]*/
                ];

                var polyline = L.polyline(latlngsVert, { color: '#00AB39' }).addTo(map);


            //batiments officiels
            for (i = 0; i < data.annexes.length; i++) {
                //marqueurs
                var Annexes = function() {
                    this.marqueur = data.annexes[i].marqueur;
                    this.size = 5;
                    this.color = '#006400';
                    this.fillColor = '#006400';
                    this.fillOpacity = 1;
                };
                var markAnnexes = new Annexes();
                var latAnnexes = data.annexes[i].geoloc.lat;
                var longAnnexes = data.annexes[i].geoloc.lng;
                markAnnexes = L.circle([latAnnexes, longAnnexes], markAnnexes.size, { color: markAnnexes.color, fillColor: markAnnexes.fillColor, fillOpacity: markAnnexes.fillOpacity }).addTo(map);
            };


            //batiments etoiles
            for (i = 0; i < data.etoiles.length; i++) {
                //marqueurs

            };

        },

        // phototheque Odile, Aymeric
        // unitegallery
        initgallery: function() {
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
                tile_overlay_opacity: 0.4, //tile overlay opacity
                tile_overlay_color: "#000000", //tile overlay color
                tile_enable_image_effect: false, //enable tile image effect
                tile_enable_textpanel: true,
                tile_textpanel_title_text_align: "center",
                tile_textpanel_always_on: true,
                lightbox_textpanel_enable_description: true, //enable the description text
                lightbox_type: "compact", //compact / wide - lightbox type
                lightbox_overlay_opacity: 0.8, //the opacity of the overlay. for compact type - 0.6
                lightbox_slider_image_border: false, //enable border around the image (for compact type only)
            });
        }
    }
    app.init();
})();