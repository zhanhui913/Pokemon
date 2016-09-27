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


                var $fav = $("#owl-clients");

                //find favourites first and add it onto the carousel
                $.each(json, function(i, el) {
                    if(el.img.length > 0){
                        el.img.forEach(function(img){
                            if(img.favourites == "true"){

                                var s = "<div class='owl-item'><img src='" + img.src + "' alt=''><h4>" + el.name + "</h4><p>" + img.description + "</p></div>";
                                $fav.append(s);
                            }
                        });
                    }
                }



                var $content = $("#pokemonContent");

                console.log("success");

                var imageList = new Array();


                //bootstrap
                $.each(json, function(i, el) {

                    console.log(el.name+" has "+el.img.length+" images");

                    var img = (el.img.length > 0) ? el.img[0].src : "images/placeholder.png" ;
                    var img = (el.img.length > 0) ? el.img[0].src : null ;
                    //var img =  "images/placeholder.png" ;
                    var description = (el.img.length > 0) ? el.img[0].description : "NA";
                    var date = (el.date == null) ? "NA" : el.date;

                    var s = "<!--" + el.name + " -->\n<div class='pokemonItem col-lg-3 col-md-4 col-sm-6 col-xs-12'>\n<a href=" + img + " class='pop-up' id='" + el.name + "'>\n<div class='portfolio-item'>\n<div class='portfolio-item-preview'>\n<img src=" + img + " >\n<div class='hidden ptitle'>\n" + description + "\n</div>\n</div>\n<div class='portfolio-item-description'>\n<h3>" + el.name + "</h3>\n<p>" + date + "</p>\n</div>\n</div>\n</a>\n</div>\n";
                    
                    //Only add pokemon with images
                    if(img != null){
                        $content.append(s);  
                    }
                });




/*
                $.each(json, function(i, el){
                    var img = (el.img.length > 0) ? el.img[0].src : "images/placeholder.png" ;
                    var children = document.querySelectorAll('#'+el.name+' .portfolio-item .portfolio-item-preview :first-child');



                    var downloadImage = new Image();
                    downloadImage.onload = function(){
                        children.src = this.src;
                    };
                    downloadImage.src = img;
                                        

                    console.log(children);
                    console.log(downloadImage);
                    console.log("-----");
                });*/


            },
            error: function (request, textStatus, errorThrown) {
                console.log(request.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
})(jQuery);
