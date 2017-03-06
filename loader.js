(function($){
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: "http://zhanhui913.github.io/Pokemon/data.json.js",
            contentType: 'application/json; charset=utf-8',
            dataType: "jsonp",
            jsonpCallback: "formatPokemonJSON",
            timeout: 5000,
            crossDomain: true,
            success: function(json) {
                console.log("success");

                var gen1Sighted = 0;
                var gen1Total = 0;

                var gen2Sighted = 0;
                var gen2Total = 0;

                var $fav = $("#owl-clients");

                //find favourites first and add it onto the carousel
                $.each(json, function(i, el) {
                    if(el.gen == 1){
                        gen1Total++;

                        if(el.src != ""){
                            gen1Sighted++;

                            console.log("saw "+el.name);
                            if(el.favourite == "true"){
                                var s = "<div class='owl-item'>\n<img src='" + el.src + "' alt=''>\n<h4>" + el.name + "</h4>\n</div>";
                                $fav.data('owlCarousel').addItem(s);
                            }
                        }
                    }

/*
                    gen1Total++;
                    if(el.img != ""){
                        gen1Sighted++;
                        if(el.favourite == "true"){
                            var s = "<div class='owl-item'>\n<img src='" + el.src + "' alt=''>\n<h4>" + el.name + "</h4>\n<p>" + el.description + "</p>\n</div>";
                            console.log(el.name+" -> "+el.img[i].description+" is true");    
                            $fav.data('owlCarousel').addItem(s);
                        }
                    }*/
                });
                console.log("gen1Sighted "+gen1Sighted+" out of "+gen1Total);
                
                //set total sighted for generation 1
                var $gen1Sighted = $("#gen1Count");
                $gen1Sighted.append(gen1Sighted+" / "+gen1Total);

                var $content = $("#pokemonContent");
                
                //images
                $.each(json, function(i, el) {

                    //console.log(el.name+" has "+el.img.length+" images");

                    var img = (el.src != "") ? el.src : "images/placeholder2.png" ;
                    var thumbnail = (el.thumbnail != "") ? el.thumbnail : "images/placeholder2.png" ;
                    //var thumbnail =  "images/placeholder2.png" ;

                    var type = "images/type/z.png";

                    //With name on hover
                    //var s = "<!--" + el.name + " -->\n<div class='col-xlg-1 col-lg-2 col-md-3 col-sm-4 col-xs-6'>\n<a href=" + img + " class='pop-up' id='" + el.name + "'>\n<div class='portfolio-item'>\n<div class='portfolio-item-preview'>\n<img src=" + thumbnail + " >\n<div class='hidden ptitle'>\n" + description + "\n</div>\n</div>\n<div class='portfolio-item-description'>\n<h3>" + el.name + "</h3>\n<p>" + date + "</p>\n</div>\n</div>\n</a>\n</div>\n";
                    
                    //Without
                    var s = "<!--" + el.name + " -->\n<div class='pokemonContainer col-lg-2 col-md-3 col-sm-4 col-xs-6'>\n<a href=" + img + " class='pop-up' id='" + el.name + "'>\n<div class='pkmn-item'>\n<div class='pkmn-item-preview'>\n<img src=" + thumbnail + " >\n<div class='pokemon-badge'>\n<img src='" + type + "' >\n</div>\n</div>\n</div>\n</a>\n</div>\n";

                    $content.append(s);  
                });
            },
            error: function (request, textStatus, errorThrown) {
                console.log(request.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
})(jQuery);
