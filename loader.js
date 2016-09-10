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

                var $content = $("#pokemonContent");

                console.log("success");
                $.each(json, function(i, el) {
                    console.log(el.name+" has "+el.img.length+" images");

                    
                    var img = (el.img.length > 0) ? el.img[0].src : "images/placeholder.png" ;
                    var description = (el.img.length > 0) ? el.img[0].description : "NA";
                    var date = (el.date == null) ? "NA" : el.date;

                    var s = "<!--" + el.name + "-->\n<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>\n<a href=" + img + " class='pop-up'>\n<div class='portfolio-item'>\n<div class='portfolio-item-preview'>\n<img src=" + img + " alt=''>\n<div class='hidden ptitle'>\n" + description + "\n</div>\n</div>\n<div class='portfolio-item-description'>\n<h3>" + el.name + "</h3>\n<p>" + date + "</p>\n</div>\n</div>\n</a>\n</div>\n";

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
