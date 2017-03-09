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
    // unitegallery
    $("#gallery").unitegallery({
                    //theme options:

        theme_gallery_padding: 200,           //the horizontal padding of the gallery from the sides

                    //gallery options:
                    
        gallery_theme: "tiles",             //choose gallery theme (if more then one themes includes)
        gallery_width:"60%",                //gallery width
        gallery_background_color: "grey",       //set custom background color. If not set it will be taken from css.

                    //tiles options:

        tiles_type: "justified",            //must option for the tiles - justified type
        tiles_justified_row_height: 60,    //base row height of the justified type
        tiles_justified_space_between: 3,   //space between the tiles justified type
        tiles_set_initial_height: true,     //columns type related only
        tiles_enable_transition: true,      //enable transition when screen width change

        tile_overlay_opacity: 0.4,          //tile overlay opacity
        tile_overlay_color: "#000000",      //tile overlay color

        tile_enable_image_effect:false,     //enable tile image effect

        tile_enable_textpanel:true,
        tile_textpanel_title_text_align: "center",
        tile_textpanel_always_on:true,


    });
})();