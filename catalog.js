{
	var age ;
	var nextpage ;

	function left_arrow(){
		page --;
		nextpage --;
		if(page==0 && nextpage == 1)
		{
			$('#sex').fadeTo(200, 1);
			$('#male-belts').css('display', 'none');
			$('.arrow-box-left').fadeTo(200, 0);
			$('.arrow-box-right').fadeTo(200, 1);
		}
		if (page==10 && nextpage == 21) {
			$('#sex').fadeTo(200, 1);
			$('#female-belts').css('display', 'none');
			$('.arrow-box-left').fadeTo(200, 0);
			$('.arrow-box-right').fadeTo(200, 1);
		}
		
	}
	function right_arrow(){
		page ++;
		nextpage ++;
		if(page==1 && nextpage == 2){
			$('#sex').css('display', 'none');
			$('#male-belts').fadeTo(200, 1);
			$('.arrow-box-left').fadeTo(200, 1);
			$('.arrow-box-right').fadeTo(200, 0);
		}
		if(page==11 && nextpage == 22){
			$('#sex').css('display', 'none');
			$('#female-belts').fadeTo(200, 1);
			$('.arrow-box-left').fadeTo(200, 1);
			$('.arrow-box-right').fadeTo(200, 0);
		}
	}
	$('#male').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#sex').css('display', 'none');
		$('#male-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);
		$('.arrow-box-right').fadeTo(200, 0);
		page=1;
		nextpage=2;

	});
	$('#female').on('click', function(){
		$('#sex').fadeTo(100, 0);
		$('#sex').css('display', 'none');
		$('#female-belts').fadeTo(200, 1);
		$('.arrow-box-left').fadeTo(200, 1);
		$('.arrow-box-right').fadeTo(200, 0);
		page=11;
		nextpage=22;

	});

}