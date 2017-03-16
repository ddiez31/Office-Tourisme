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

                url:url,
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

            var bouton = L.easyButton('<strong>O</strong>', function(btn, map) {
              $("#dialog").dialog("open");
              app.initgallery(data)


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
                contentPopupOcre += "<h2>" + titreOcre + "</h2>" + "<br>";
                for (j = 0; j < data.ocre[i].images.length; j++) {
                    var imgOcre = data.ocre[i].images[j].url;
                    contentPopupOcre += '<img src="' + imgOcre + '" alt="' + titreOcre + '" data-image="' + imgOcre + '" width="200" height="150">';
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
                    this.borderColor = '#00AB39';
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
            var photoOcre = '';
            for (x = 0; x < data.ocre.length; x++) {
                var alt=data.ocre[x].titre;

                for (y = 0; y < data.ocre[x].images.length; y++) {
                    var imgOcre = data.ocre[x].images[y].url;
                    var creditOcre = data.ocre[x].images[y].credit;
                    photoOcre += '<img alt="' + alt + '" src="' + imgOcre + '" data-image="' + imgOcre + '" data-description="' + creditOcre + '">';
                }
            };

            var photoVert = '';
            for (x = 0; x < data.vert.length; x++) {
                var alt=data.vert[x].titre;

                for (y = 0; y < data.vert[x].images.length; y++) {
                    var imgVert = data.vert[x].images[y].url;
                    var creditVert = data.vert[x].images[y].credit;
                    photoVert += '<img alt="' + alt + '" src="' + imgVert + '" data-image="' + imgVert + '" data-description="' + creditVert + '">';
                }
            };
        
            $("#Ocre").is('checked', function(){
                var test= $("#Ocre").val();
                console.log(test)
                console.log("ok");
            })
           //  var filterOcre = $("#Ocre").on("click");
           //  var filterVert = $("#Vert").on("click");

           //  if(filterOcre==true){
           //      $("#gallery").html(photoOcre)
           //      console.log("ok")
           //  }
           //  else if(filterVert==true){
           //      $("#gallery").html(photoVert)
           //  }
           //  else{
           //     $("#gallery").html(photoOcre + photoVert);  
           // };

            $("#gallery").unitegallery({

        //theme options:
        theme_gallery_padding: 0, //the horizontal padding of the gallery from the sides

        //gallery options:
        gallery_theme: "tiles", //choose gallery theme (if more then one themes includes)
        gallery_width: "100%", //gallery width
        gallery_background_color: "grey", //set custom background color. If not set it will be taken from css.

        //tiles options:
        tiles_type: "justified", //must option for the tiles - justified type
        tiles_justified_row_height: 120, //base row height of the justified type
        tiles_justified_space_between: 3, //space between the tiles justified type
        tiles_set_initial_height: true, //columns type related only
        tiles_enable_transition: true, //enable transition when screen width change
        tile_overlay_opacity: 0.4, //tile overlay opacity
        tile_overlay_color: "#000000", //tile overlay color
        tile_enable_image_effect: false, //enable tile image effect
        tile_enable_textpanel: true,
        tile_textpanel_title_text_align: "center",
        tile_textpanel_always_on: true,
        tile_textpanel_desc_font_size:0,      //textpanel description font size. if null - take from css
        tile_enable_action:true,
        lightbox_textpanel_enable_description: true, //enable the description text
        lightbox_type: "compact", //compact / wide - lightbox type
        lightbox_overlay_opacity: 0.8, //the opacity of the overlay. for compact type - 0.6
        lightbox_slider_image_border: false, //enable border around the image (for compact type only)
    });

       }
   }
   app.init();
})();