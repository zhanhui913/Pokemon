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
                console.log("success : ");
                $.each(json, function(i, el) {
                    console.log(el.name+" has "+el.img.size()+" images");
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
