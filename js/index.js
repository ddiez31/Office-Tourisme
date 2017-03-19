(function() {

    var app = {
        // admin David
        init: function() {
            this.url = "../data/galerie.json";
            this.getGalerie(app.url);
        },

        getGalerie: function(url) {
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

        // carte interactive
        initmap: function(data) {
            var map = new L.Map('cdf_map', { fullscreenControl: true });
            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery © CloudMade';

            var osm = new L.TileLayer(osmUrl, { minZoom: 10, maxZoom: 19, attribution: osmAttrib });

            map.setView(new L.LatLng(43.1083, 0.7234), 16);
            map.addLayer(osm);
            map.scrollWheelZoom.disable();
            map.on('fullscreenchange', function() {
                if (map.isFullscreen()) {
                    bouton.remove();
                    return;
                } else {
                    map.remove();
                    app.init();
                }
            });

            //button pour ouvrir la galerie sur la map
            $("#dialog").dialog({
                autoOpen: false,
                width: 1200,
                resizable: false,
                fluid: true,
                clickOut: false,
                responsive: true,
                show: {
                    effect: "fade",
                    duration: 1000
                },
                hide: {
                    effect: "fade",
                    duration: 1000
                }
            });
            var bouton = L.easyButton({
                position: 'bottomleft',
                states: [{
                    onClick: function(btn, map) {
                        $("#dialog").dialog("open");
                        $("#cdf_map").css("opacity", "0.1");
                        app.initgallery(data);
                    },
                    title: 'Galerie Photos',
                    icon: '<img class="center" src="../images/glyphicons-139-picture.png">'
                }]
            }).addTo(map);

            //circuit ocre
            for (i = 0; i < data.ocre.length; i++) {
                //marqueurs
                var Ocre = function() {
                    this.text = data.ocre[i].marqueur;
                    this.iconSize = [15, 15];
                    this.borderColor = '#FF5200';
                    this.backgroundColor = "rgba(255, 82, 0, 0.5)";
                    this.textColor = '#000';
                    this.isAlphaNumericIcon = true;
                    this.innerIconStyle = 'margin:auto';
                };
                var markOcre = new Ocre();
                var latOcre = data.ocre[i].geoloc.lat;
                var longOcre = data.ocre[i].geoloc.lng;
                markOcre = L.marker([latOcre, longOcre], {
                    icon: L.BeautifyIcon.icon({
                        iconSize: markOcre.iconSize,
                        borderColor: markOcre.borderColor,
                        backgroundColor: markOcre.backgroundColor,
                        isAlphaNumericIcon: markOcre.isAlphaNumericIcon,
                        text: markOcre.text,
                        textColor: markOcre.textColor,
                        innerIconStyle: markOcre.innerIconStyle
                    })
                }).addTo(map);
                //popup
                var titreOcre = data.ocre[i].titre;
                var texteOcre = data.ocre[i].texte;
                var contentPopupOcre = '';
                contentPopupOcre += "<h2>" + titreOcre + "</h2>" + "<br><div class='carousel'>";
                for (j = 0; j < data.ocre[i].images.length; j++) {
                    var imgOcre = data.ocre[i].images[j].url;
                    contentPopupOcre += '<a href="' + imgOcre + '" data-lightbox="' + imgOcre + '"><img class="imgPopup" src="' + imgOcre + '" alt="' + titreOcre + '" data-image="' + imgOcre + '"></a>';
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
                    this.text = data.vert[i].marqueur;
                    this.iconSize = [15, 15];
                    this.borderColor = '#18453B';
                    this.backgroundColor = "rgb(0, 171, 57, 0.5)";
                    this.textColor = '#000';
                    this.isAlphaNumericIcon = true;
                    this.innerIconStyle = 'margin:auto';
                };
                var markVert = new Vert();
                var latVert = data.vert[i].geoloc.lat;
                var longVert = data.vert[i].geoloc.lng;
                markVert = L.marker([latVert, longVert], {
                    icon: L.BeautifyIcon.icon({
                        iconSize: markVert.iconSize,
                        borderColor: markVert.borderColor,
                        backgroundColor: markVert.backgroundColor,
                        isAlphaNumericIcon: markVert.isAlphaNumericIcon,
                        text: markVert.text,
                        textColor: markVert.textColor,
                        innerIconStyle: markVert.innerIconStyle
                    })
                }).addTo(map);
                //popup
                titreVert = data.vert[i].titre;
                texteVert = data.vert[i].texte;
                var contentPopupVert = '';
                contentPopupVert += "<h2>" + titreVert + "</h2>" + "<br><div class='carousel'>";
                for (j = 0; j < data.vert[i].images.length; j++) {
                    var imgVert = data.vert[i].images[j].url;
                    contentPopupVert += '<a href="' + imgVert + '" data-lightbox="' + imgVert + '"><img class="imgPopup" src="' + imgVert + '" alt="' + titreVert + '" data-image="' + imgVert + '"></a>';
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
                    this.text = data.annexes[i].marqueur;
                    this.iconSize = [15, 15];
                    this.borderColor = ' #193025';
                    this.backgroundColor = "rgb(0, 100, 0, 0.5)";
                    this.textColor = '#000';
                    this.isAlphaNumericIcon = true;
                    this.innerIconStyle = 'margin:auto';
                };
                var markAnnexes = new Annexes();
                var latAnnexes = data.annexes[i].geoloc.lat;
                var longAnnexes = data.annexes[i].geoloc.lng;
                markAnnexes = L.marker([latAnnexes, longAnnexes], {
                    icon: L.BeautifyIcon.icon({
                        iconSize: markAnnexes.iconSize,
                        borderColor: markAnnexes.borderColor,
                        backgroundColor: markAnnexes.backgroundColor,
                        isAlphaNumericIcon: markAnnexes.isAlphaNumericIcon,
                        text: markAnnexes.text,
                        textColor: markAnnexes.textColor,
                        innerIconStyle: markAnnexes.innerIconStyle
                    })
                }).addTo(map);
                //popup
                titreAnnexes = data.annexes[i].titre;
                texteAnnexes = data.annexes[i].texte;
                var contentPopupAnnexes = '';
                contentPopupAnnexes += "<h2>" + titreAnnexes + "</h2>" + "<br><div class='carousel'>";
                for (j = 0; j < data.annexes[i].images.length; j++) {
                    var imgAnnexes = data.annexes[i].images[j].url;
                    contentPopupAnnexes += '<a href="' + imgAnnexes + '" data-lightbox="' + imgAnnexes + '"><img class="imgPopup" src="' + imgAnnexes + '" alt="' + titreAnnexes + '" data-image="' + imgAnnexes + '"></a>';
                }
                contentPopupAnnexes += "</div><p>" + texteAnnexes + "</p>";
                markAnnexes.bindPopup(contentPopupAnnexes);
            };

            //batiments etoiles
            for (i = 0; i < data.etoiles.length; i++) {
                //marqueurs
                var Etoiles = function() {
                    this.borderColor = data.etoiles[i].marqueur;
                    this.backgroundColor = data.etoiles[i].marqueur;
                    this.iconSize = [8, 8];
                };
                var markEtoiles = new Etoiles();
                var latEtoiles = data.etoiles[i].geoloc.lat;
                var longEtoiles = data.etoiles[i].geoloc.lng;
                markEtoiles = L.marker([latEtoiles, longEtoiles], {
                    icon: L.BeautifyIcon.icon({
                        iconSize: markEtoiles.iconSize,
                        borderColor: markEtoiles.borderColor,
                        backgroundColor: markEtoiles.backgroundColor
                    })
                }).addTo(map);
                //popup
                titreEtoiles = data.etoiles[i].titre;
                texteEtoiles = data.etoiles[i].texte;
                var contentPopupEtoiles = '';
                contentPopupEtoiles += "<h2>" + titreEtoiles + "</h2>" + "<br><div class='carousel'>";
                for (j = 0; j < data.etoiles[i].images.length; j++) {
                    var imgEtoiles = data.etoiles[i].images[j].url;
                    contentPopupEtoiles += '<a href="' + imgEtoiles + '" data-lightbox="' + imgEtoiles + '"><img class="imgPopup" src="' + imgEtoiles + '" alt="' + titreEtoiles + '" data-image="' + imgEtoiles + '"></a>';
                }
                contentPopupEtoiles += "</div><p>" + texteEtoiles + "</p>";
                markEtoiles.bindPopup(contentPopupEtoiles);
            };

            //filtres sentiers
            var overlayMaps = {
                "Circuit Ocre": polylineOcre,
                "Circuit Vert": polylineVert
            };
            L.control.layers(null, overlayMaps, { collapsed: false, position: 'topright' }).addTo(map);
        },

        // phototheque
        initgallery: function(data) {
            var photoOcre = '';
            for (x = 0; x < data.ocre.length; x++) {
                var alt = data.ocre[x].titre;
                for (y = 0; y < data.ocre[x].images.length; y++) {
                    var imgOcre = data.ocre[x].images[y].url;
                    var creditOcre = data.ocre[x].images[y].credit;
                    photoOcre += '<img alt="' + alt + '" src="' + imgOcre + '" data-image="' + imgOcre + '" data-description="' + creditOcre + '">';
                }
            };

            var photoVert = '';
            for (x = 0; x < data.vert.length; x++) {
                var alt = data.vert[x].titre;
                for (y = 0; y < data.vert[x].images.length; y++) {
                    var imgVert = data.vert[x].images[y].url;
                    var creditVert = data.vert[x].images[y].credit;
                    photoVert += '<img alt="' + alt + '" src="' + imgVert + '" data-image="' + imgVert + '" data-description="' + creditVert + '">';
                }
            };
            var photoAnnexes = '';
            for (x = 0; x < data.annexes.length; x++) {
                var alt = data.annexes[x].titre;
                for (y = 0; y < data.annexes[x].images.length; y++) {
                    var imgAnnexes = data.annexes[x].images[y].url;
                    var creditAnnexes = data.annexes[x].images[y].credit;
                    photoAnnexes += '<img alt="' + alt + '" src="' + imgAnnexes + '" data-image="' + imgAnnexes + '" data-description="' + creditAnnexes + '">';
                }
            };
            var photoEtoiles = '';
            for (x = 0; x < data.etoiles.length; x++) {
                var alt = data.etoiles[x].titre;
                for (y = 0; y < data.etoiles[x].images.length; y++) {
                    var imgEtoiles = data.etoiles[x].images[y].url;
                    var creditEtoiles = data.etoiles[x].images[y].credit;
                    photoEtoiles += '<img alt="' + alt + '" src="' + imgEtoiles + '" data-image="' + imgEtoiles + '" data-description="' + creditEtoiles + '">';
                }
            };

            $('#gallery').html(photoOcre + photoVert + photoAnnexes + photoEtoiles);

            $("#gallery").unitegallery({
                //main options:
                grid_padding: 10, //set padding to the grid
                grid_space_between_cols: 10, //space between columns
                grid_space_between_rows: 10, //space between rows
                //gallery options:
                gallery_theme: "tilesgrid", //choose gallery theme (if more then one themes includes)
                gallery_width: "100%", //gallery width
                gallery_background_color: "œ#C0C0C0", //set custom background color. If not set it will be taken from css.
                //navigation option:
                grid_num_rows: 3, //maximum number of grid rows. If set to big value, the navigation will not appear.
                theme_navigation_type: "arrows", //bullets, arrows
                theme_space_between_arrows: 5, //horizontal space between arrows
                //tile design options:
                //tiles_type: "justified", //must option for the tiles - justified type
                // tiles_justified_row_height: 120, //base row height of the justified type
                // tiles_justified_space_between: 3, //space between the tiles justified type
                // tiles_set_initial_height: true, //columns type related only
                // tiles_enable_transition: true, //enable transition when screen width change
                tile_overlay_opacity: 0.4, //tile overlay opacity
                tile_overlay_color: "#000000", //tile overlay color
                tile_enable_image_effect: false, //enable tile image effect
                //tile text panel options:
                tile_enable_textpanel: true,
                tile_textpanel_title_text_align: "center",
                tile_textpanel_always_on: true,
                tile_textpanel_title_font_size: null, //textpanel title font size. if null - take from css
                tile_enable_action: true,
                //lightbox options:
                lightbox_slider_control_zoom: false, //true, false - enable zooming control
                lightbox_textpanel_enable_description: true, //enable the description text
                lightbox_type: "compact", //compact / wide - lightbox type
                lightbox_overlay_opacity: 0.8, //the opacity of the overlay. for compact type - 0.6
                lightbox_slider_image_border: false, //enable border around the image (for compact type only)
            });

            select(photoOcre, photoVert, photoAnnexes, photoEtoiles);
            $(".ui-dialog-titlebar-close").on("click", function() {
                $("#cdf_map").css("opacity", "1")
            })
        }
    }
    app.init();
})();

function select(photoOcre, photoVert, photoAnnexes, photoEtoiles) {
    $("#selectTheme").on("change", function() {
        if ($(this).val() == "Ocre") {
            $("#gallery").html(photoOcre);
        } else if ($(this).val() == "Vert") {
            $("#gallery").html(photoVert);
        } else if ($(this).val() == "Annexes") {
            $("#gallery").html(photoAnnexes);
        } else if ($(this).val() == "Etoiles") {
            $("#gallery").html(photoEtoiles);
        } else {
            $('#gallery').html(photoOcre + photoVert + photoAnnexes + photoEtoiles);
        };

        $("#gallery").unitegallery({
            //main options:
            grid_padding: 10, //set padding to the grid
            grid_space_between_cols: 10, //space between columns
            grid_space_between_rows: 10, //space between rows
            //gallery options:
            gallery_theme: "tilesgrid", //choose gallery theme (if more then one themes includes)
            gallery_width: "100%", //gallery width
            gallery_background_color: "œ#C0C0C0", //set custom background color. If not set it will be taken from css.
            //navigation option:
            grid_num_rows: 3, //maximum number of grid rows. If set to big value, the navigation will not appear.
            theme_navigation_type: "arrows", //bullets, arrows
            theme_space_between_arrows: 5, //horizontal space between arrows
            //tile design options:
            //tiles_type: "justified", //must option for the tiles - justified type
            // tiles_justified_row_height: 120, //base row height of the justified type
            // tiles_justified_space_between: 3, //space between the tiles justified type
            // tiles_set_initial_height: true, //columns type related only
            // tiles_enable_transition: true, //enable transition when screen width change
            tile_overlay_opacity: 0.4, //tile overlay opacity
            tile_overlay_color: "#000000", //tile overlay color
            tile_enable_image_effect: false, //enable tile image effect
            //tile text panel options:
            tile_enable_textpanel: true,
            tile_textpanel_title_text_align: "center",
            tile_textpanel_always_on: true,
            tile_textpanel_title_font_size: null, //textpanel title font size. if null - take from css
            tile_enable_action: true,
            //lightbox options:
            lightbox_slider_control_zoom: false, //true, false - enable zooming control
            lightbox_textpanel_enable_description: true, //enable the description text
            lightbox_type: "compact", //compact / wide - lightbox type
            lightbox_overlay_opacity: 0.8, //the opacity of the overlay. for compact type - 0.6
            lightbox_slider_image_border: false, //enable border around the image (for compact type only)
        });
    })
};