{
	var prevpage;
	$('#male').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#male-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);

	});
	$('#female').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#female-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);
	});

}