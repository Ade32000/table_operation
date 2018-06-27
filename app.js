// var nb1 = [0,1,2,3,4,5,6,7,8,9];
// var nb2 = [0,1,2,3,4,5,6,7,8,9];
// var result = [];
// var resultat = 0;


// $("#multiplicateur").click(function()
// {
// 	for (var i = 0; i <nb1.length; i++) 
// 	{
// 		console.log(i);
// 	   for (var j = 0; j <nb2.length; j++)
// 	   {
// 	       resultat =  i * j;
// 	       console.log(resultat);
// 	       result.push(resultat);
// 	   }	
// 	}
// 	console.log(result);

// 	for (var x = 0; x <result.length; x++)
// 	{

// 		if (x<10) 
// 		{
// 			$("#tr2").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=10 && x<20) 
// 		{
// 			$("#tr3").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=20 && x<30) 
// 		{
// 			$("#tr4").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=30 && x<40) 
// 		{
// 			$("#tr5").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=40 && x<50) 
// 		{
// 			$("#tr6").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=50 && x<60) 
// 		{
// 			$("#tr7").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=60 && x<70) 
// 		{
// 			$("#tr8").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=70 && x<80) 
// 		{
// 			$("#tr9").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=80 && x<90) 
// 		if (result[x]>10)
// 		{
// 			$("#tr10").append("<td style='width:50px; background-color: pink;'>" + result[x] + "</td>");
// 		}
// 		else
// 		{
// 			$("#tr10").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=90 && x<1000) 
// 		{
// 		if (result[x]>10)
// 		{
// 			$("#tr11").append("<td style='width:50px; background-color: pink;'>" + result[x] + "</td>");
// 		}
// 		else
// 		{
// 			$("#tr11").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		}

// 	}
// });	


// $("#soustracteur").click(function()
// {
// 	for (var i = 0; i <nb1.length; i++) 
// 	{
// 		console.log(i);
// 	   for (var j = 0; j <nb2.length; j++)
// 	   {
// 	       resultat =  i - j;
// 	       console.log(resultat);
// 	       result.push(resultat);
// 	   }	
// 	}
// 	console.log(result);

// 	for (var x = 0; x <result.length; x++)
// 	{
// 		if (x<10) 
// 		{
// 			$("#tr2").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=10 && x<20) 
// 		{
// 			$("#tr3").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=20 && x<30) 
// 		{
// 			$("#tr4").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=30 && x<40) 
// 		{
// 			$("#tr5").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=40 && x<50) 
// 		{
// 			$("#tr6").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=50 && x<60) 
// 		{
// 			$("#tr7").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=60 && x<70) 
// 		{
// 			$("#tr8").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=70 && x<80) 
// 		{
// 			$("#tr9").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=80 && x<90) 
// 		{
			// $("#tr10").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}
// 		else if (x>=90 && x<1000) 
// 		{
// 			$("#tr11").append("<td style='width:50px'>" + result[x] + "</td>");	
// 		}

// 	}
// });	
var nb1 = ["",0,1,2,3,4,5,6,7,8,9];
var mult_result = 0;
var compteur = 0;
var stock = [];
var j = 0;
var i = 0;
var table = $("#tableau").append("<table></table>");

$("#multiplicateur").click(function()
{
	for ( i = 0; i < nb1.length;i++ ) 
	{
		table.append('<th>' + nb1[i] + '</th>');
	}	
	for ( i = 1; i < nb1.length;i++ ) 
	{
		table.append('<tr></tr>');
		for ( j = 1; j <= 1; j++)
		{
			table.append('<th>' + nb1[i] + '</th>');
		}	
		for ( j = 1; j < nb1.length; j++)
		{
 		
 		if (nb1[j] * nb1[i]>50)
 		{
 			table.append("<td style='width:50px; background-color: red;'>" + nb1[j] * nb1[i] + "</td>");
 		}
		else if (nb1[j] * nb1[i]>10)
 		{
 			table.append("<td style='width:50px; background-color: pink;'>" + nb1[j] * nb1[i] + "</td>");
 		}else
 		{
			table.append('<td>' + nb1[j] * nb1[i] + '</td>');
 		}
		}
	}
});

$("#soustracteur").click(function()
{
	for ( i = 0; i < nb1.length;i++ ) 
	{
		table.append('<th>' + nb1[i] + '</th>');
	}	
	for ( i = 1; i < nb1.length;i++ ) 
	{
		table.append('<tr></tr>');
		for ( j = 1; j <= 1; j++)
		{
			table.append('<th>' + nb1[i] + '</th>');
		}	
		for ( j = 1; j < nb1.length; j++)
		{
			table.append('<td>' + ( nb1[j] - nb1[i] ) + '</td>');
		}			

	}
});


$("#division").click(function()
{
	for ( i = 0; i < nb1.length;i++ ) 
	{
		table.append('<th>' + nb1[i] + '</th>');
	}	
	for ( i = 1; i < nb1.length;i++ ) 
	{
		table.append('<tr></tr>');
		for ( j = 1; j <= 1; j++)
		{
			table.append('<th>' + nb1[i] + '</th>');
		}	
		for ( j = 1; j < nb1.length; j++)
		{
			if ( ( nb1[j] / nb1[i] ) == Infinity || isNaN(nb1[j] / nb1[i] ) )
			{
				table.append('<td> wtf </td>');
			}
			else
			{
			table.append('<td>' + ( nb1[j] / nb1[i] ).toFixed(2)  + '</td>');
			}
		}			

	}
});

$("#addition").click(function()
{
	for ( i = 0; i < nb1.length;i++ ) 
	{
		table.append('<th>' + nb1[i] + '</th>');
	}	
	for ( i = 1; i < nb1.length;i++ ) 
	{
		table.append('<tr></tr>');
		for ( j = 1; j <= 1; j++)
		{
			table.append('<th>' + nb1[i] + '</th>');
		}	
		for ( j = 1; j < nb1.length; j++)
		{
			if (nb1[j] + nb1[i]>10)
 		{
 			table.append("<td style='width:50px; background-color: pink;'>" + ( nb1[j] + nb1[i] ) + "</td>");
 		}
 		else
 		{
			table.append('<td>' + ( nb1[j] + nb1[i] ) + '</td>');
 		}
			
		}			
	}
});

