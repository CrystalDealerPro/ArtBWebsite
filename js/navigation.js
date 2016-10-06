$(document).ready(function(){
	
	//main menu navigation links
	$('.artB-menu-link').on('click', function(e){
		e.preventDefault();
		$('#main-content').load($(this).data("url"));
	});

	$('#logo-link').on('click', function(e){
		e.preventDefault();
		location.reload(true);
	});
});