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

                var sighted = 0;
                var total = 0;

                var $fav = $("#owl-clients");

                //find favourites first and add it onto the carousel
                $.each(json, function(i, el) {
                    total++;
                    if(el.img.length > 0){
                        sighted++;
                        for(var i = 0; i < el.img.length; i++){
                            if(el.img[i].favourite == "true"){
                                var s = "<div class='owl-item'>\n<img src='" + el.img[i].src + "' alt=''>\n<h4>" + el.name + "</h4>\n<p>" + el.img[i].description + "</p>\n</div>";
                                console.log(el.name+" -> "+el.img[i].description+" is true");    

                                $fav.data('owlCarousel').addItem(s);
                            }
                        }
                    }
                });
                console.log("sighted "+sighted+" out of "+total);
                
                //set total sighted
                var $sighted = $("#pokemonCount");
                $sighted.append(sighted+"/"+total);

                var $content = $("#pokemonContent");
                
                //images
                $.each(json, function(i, el) {

                    console.log(el.name+" has "+el.img.length+" images");

                    var img = (el.img.length > 0) ? el.img[0].src : "images/placeholder2.png" ;
                    var thumbnail = (el.img.length > 0) ? el.img[0].thumbnail : "images/placeholder2.png" ;

                    var description = (el.img.length > 0) ? el.img[0].description : "NA";
                    var date = (el.date == null) ? "NA" : el.date;

                    //With name on hover
                    var s = "<!--" + el.name + " -->\n<div class='col-xlg-1 col-lg-2 col-md-3 col-sm-4 col-xs-6'>\n<a href=" + img + " class='pop-up' id='" + el.name + "'>\n<div class='portfolio-item'>\n<div class='portfolio-item-preview'>\n<img src=" + thumbnail + " >\n<div class='hidden ptitle'>\n" + description + "\n</div>\n</div>\n<div class='portfolio-item-description'>\n<h3>" + el.name + "</h3>\n<p>" + date + "</p>\n</div>\n</div>\n</a>\n</div>\n";
                    
                    //Without
                    //var s = "<!--" + el.name + " -->\n<div class='col-lg-2 col-md-3 col-sm-4 col-xs-6'>\n<a href=" + img + " class='pop-up' id='" + el.name + "'>\n<div class='portfolio-item'>\n<div class='portfolio-item-preview'>\n<img src=" + thumbnail + " >\n<div class='hidden ptitle'>\n" + description + "\n</div>\n</div>\n</div>\n</a>\n</div>\n";
 
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
