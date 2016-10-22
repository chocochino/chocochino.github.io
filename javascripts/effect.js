function appendcomment() {
	console.log("Yey masup bro");
	var name = "  " + $("input[name=name]").val();
	var content = $("input[name=content]").val();
	$( ".media-list" ).append( 
	'<li class="media"><div class="media-bodyia-left"> <a href="#"><span class="glyphicon glyphicon-comment" aria-hidden="true"></span><h7 class="media-heading">'+name+'</h7></a></div><div class="media-body">'+content+'</div></li>' 
	);
}