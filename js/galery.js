
{
	var mas = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] ;// массив картинок
	var to = -1;  // Счетчик, указывающий на текущую картинки
	var url = "background: url(pictures/";
	var end = "";
	var obj = document.getElementById("img");

	window.onload = function autoscroll(){
		
	  	if (to < mas.length-1)  to++ 
	  	else
	   	to = 0;
	    obj.style = url + mas[to]+'';
	    obj.style.backgroundSize = "100%";
	    setTimeout(autoscroll, 4000);
		
	}
	function right_arrow() // Открытие следующей картинки(движение вправо)
	{ 
	
	  if (to < mas.length-1)  to++ 
	   else
	     to = 0;
	     obj.style = url + mas[to]+'';
	     obj.style.backgroundSize = "100%";
	}

	function left_arrow() // Открытие предыдущей картинки(движение влево)
	{     

	if (to > 0) to--;
	  else
	    to = mas.length-1;
	    obj.style = url + mas[to]+'';
	     obj.style.backgroundSize = "100%";	  			 
	}
}