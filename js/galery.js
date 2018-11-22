
{
	// var mas = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] ;// массив картинок
	// var to = -1;  // Счетчик, указывающий на текущую картинки
	// var url = "background: url(pictures/";
	// var end = "";
	// var obj = document.getElementById("img");

	// window.onload = function autoscroll(){
		
	//   	if (to < mas.length-1)  to++ 
	//   	else
	//    	to = 0;
	//     obj.style = url + mas[to]+'';
	//     obj.style.backgroundSize = "100%";
	//     setTimeout(autoscroll, 4000);
		
	// }

	// function right_arrow() // Открытие следующей картинки(движение вправо)
	// { 
	
	//   if (to < mas.length-1)  to++ 
	//    else
	//      to = 0;
	//      obj.style = url + mas[to]+'';
	//      obj.style.backgroundSize = "100%";
	// }

	// function left_arrow() // Открытие предыдущей картинки(движение влево)
	// {     

	// if (to > 0) to--;
	//   else
	//     to = mas.length-1;
	//     obj.style = url + mas[to]+'';
	//      obj.style.backgroundSize = "100%";	  			 
	// }
		var number ;
		var prenumber;
		var count = 1;	

	window.onload = function scrolling(){
		
			
				number = 'img'+(count);
				prenumber = 'img'+(count-1);
				// document.getElementById(number).style.left = perc+'%';
				if(count == 1){
					$('#'+number).fadeTo(400,1);
					$('#img5').fadeTo(400,0);
				}
				else{
					$('#'+number).fadeTo(400,1);
					$('#'+prenumber).fadeTo(400,0);
				}
				// alert('count='+count+'  number'+number+'  prenumber='+prenumber);
			count++;
			if(count>5)
			{
				count=1;
			}	
			
			setTimeout(scrolling, 5000);
	}
	function left_arrow(){
		
		if(count<1){
			count=5;
		}
		number = 'img'+(count);
		prenumber = 'img'+(count-1);
		if(count == 1){
			$('#'+number).fadeTo(400,0);
			$('#img5').fadeTo(400,1);
		}
		else{
			$('#'+number).fadeTo(400,0);
			$('#'+prenumber).fadeTo(400,1);
		}
		count--;


	}
	function right_arrow(){
		if(count>5){
			count=1;
		}
		number = 'img'+(count);
		prenumber = 'img'+(count-1);
		if(count == 1){
			$('#'+number).fadeTo(400,1);
			$('#img5').fadeTo(400,0);
		}
		else{
			$('#'+number).fadeTo(400,1);
			$('#'+prenumber).fadeTo(400,0);
		}
		count++;

	}
	

}