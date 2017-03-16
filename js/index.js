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
                error: function(err) {
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

            var bounds = [[43.108110, 0.728145], [43.108005, 0.728127], [43.107952, 0.728019], [43.107873, 0.728109], [43.107735, 0.728100], [43.107781, 0.728145], [43.107696, 0.728244], [43.107742, 0.728271], [43.107821, 0.728389], [43.107840, 0.728244], [43.108110, 0.728145]];
// create an orange rectangle
L.polyline(bounds, {color: "#ff7800", weight: 1}).addTo(map);



map.scrollWheelZoom.disable();
map.on('fullscreenchange', function() {
    if (map.isFullscreen()) {
        return;
    } else {
        map.remove();
        app.init();
    }
});


            //button pour ouvrir la galerie sur la map
            $("#gallery").dialog({
                autoOpen: false,
                width: 1200,
                height: "auto",
                resizable: false,
                fluid: true,
                responsive: true,
                clickOut: true,
                show: {
                    effect: "fade",
                    duration: 2500
                },
                hide: {
                    effect: "fade",
                    duration: 1000
                }
            });

            L.easyButton('<strong >O</strong>', function(btn, map) {
                $("#gallery").dialog("open");
                app.initgallery(data)
            }).addTo(map);



            //circuit ocre
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
                markOcre = L.circle([latOcre, longOcre], markOcre.size, { color: markOcre.color, fillColor: markOcre.fillColor, fillOpacity: markOcre.fillOpacity }).addTo(map);
                //popup
                var titreOcre = data.ocre[i].titre;
                var texteOcre = data.ocre[i].texte;
                var contentPopupOcre = '';
                contentPopupOcre += "<h2>" + titreOcre + "</h2>" + "<br><div class='carousel'>";
                for (j = 0; j < data.ocre[i].images.length; j++) {
                    var imgOcre = data.ocre[i].images[j].url;
                    contentPopupOcre += '<img src="' + imgOcre + '" width="200" height="150">';
                }
                contentPopupOcre += "</div><p>" + texteOcre + "</p>";
                markOcre.bindPopup(contentPopupOcre);
            };
            //sentier
            var latlngsOcre = data.ocre[0].sentier;
            var polylineOcre = L.polyline(latlngsOcre, { color: '#FF5200' }).addTo(map);

            //circuit vert clair
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
                titreVert = data.vert[i].titre;
                texteVert = data.vert[i].texte;
                var contentPopupVert = '';
                contentPopupVert += "<h2>" + titreVert + "</h2>" + "<br>";
                for (j = 0; j < data.vert[i].images.length; j++) {
                    var imgVert = data.vert[i].images[j].url;
                    contentPopupVert += '<img src="' + imgVert + '" width="200" height="150">';
                }
                contentPopupVert += "<p>" + texteVert + "</p>";
                markVert.bindPopup(contentPopupVert);
            };
            //sentier
            var latlngsVert = data.vert[0].sentier;
            var polylineVert = L.polyline(latlngsVert, { color: '#00AB39' }).addTo(map);



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
                //popup
                titreAnnexes = data.annexes[i].titre;
                texteAnnexes = data.annexes[i].texte;
                var contentPopupAnnexes = '';
                contentPopupAnnexes += "<h2>" + titreAnnexes + "</h2>" + "<br>";
                for (j = 0; j < data.annexes[i].images.length; j++) {
                    var imgAnnexes = data.annexes[i].images[j].url;
                    contentPopupAnnexes += '<img src="' + imgAnnexes + '" width="200" height="150">';
                }
                contentPopupAnnexes += "<p>" + texteAnnexes + "</p>";
                markAnnexes.bindPopup(contentPopupAnnexes);
            };


            //batiments etoiles
            for (i = 0; i < data.etoiles.length; i++) {
                //marqueurs

            };
        },

        // phototheque Odile, Aymeric
        // unitegallery
        initgallery: function(data) {
            console.log(data.ocre[0].images)

            $("#gallery").unitegallery({
                //theme options:
                theme_gallery_padding: 0, //the horizontal padding of the gallery from the sides

                //gallery options:
                gallery_theme: "tiles", //choose gallery theme (if more then one themes includes)
                gallery_width: "100%", //gallery width
                gallery_background_color: "grey", //set custom background color. If not set it will be taken from css.

                //tiles options:
                tiles_type: "justified", //must option for the tiles - justified type
                tiles_justified_row_height: 20, //base row height of the justified type
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
            var photoOcre = '';
            for (x = 0; x < data.ocre.length; x++) {
                var alt=data.ocre[x].titre;

                for (y = 0; y < data.ocre[x].images.length; y++) {
                    var imgOcre = data.ocre[x].images[y].url;
                    var creditOcre = data.ocre[x].images[y].credit;
                    photoOcre += '<img src="' + imgOcre + '" alt="' + alt + '" data-image="' + imgOcre + '" data-description="' + creditOcre + '" height="120px">'; 
                    console.log(photoOcre)
                }
            }

        }
    }
    app.init();
})();