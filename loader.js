(function($){
			$(document).ready(function(){
				$.ajax({
  					url: "http://zhanhui913.github.io/Pokemon/data.json.js",
  					dataType: "jsonp",
  					jsonpCallback: "zhanhui913/Pokemon:data",
  					success: function(data) {
  						console.log("success");
  					},
    				error: function() { // callback if there's an error
      				console.log("error");
    				}
				});
			});
})(jQuery);
