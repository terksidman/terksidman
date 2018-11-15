{
	var prevpage ;
	var nextpage ;

	function left_arrow(){
		if(prevpage==0)
		{
		$('#sex').fadeTo(100, 1);
		$('#male-belts').css('display', 'none');
		$('.arrow-box-left').fadeTo(200, 0);
		$('.arrow-box-right').fadeTo(200, 1);

		prevpage = 0;
		nextpage = 1;
		}
	}
	function right_arrow(){
	}
	$('#male').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#male-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);
		prevpage=0;

	});
	$('#female').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#female-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);
		prevpage=0;

	});

}