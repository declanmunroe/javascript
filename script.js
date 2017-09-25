$(document).ready(function() {
 

//  	$("#stream1_btn").on("click", function() {
//  		$(".stream1").removeClass('highlight_stream');
// 		$(".stream2").removeClass('highlight_stream');
// 		$(".stream3").removeClass('highlight_stream');
// 	  	$(".stream1").addClass('highlight_stream');
// 	});
// 	$("#stream2_btn").on("click", function() {
// 		$(".stream1").removeClass('highlight_stream');
// 		$(".stream2").removeClass('highlight_stream');
// 		$(".stream3").removeClass('highlight_stream');
// 	  	$(".stream2").addClass('highlight_stream');
// 	});
// 	$("#stream3_btn").on("click", function() {
// 		$(".stream1").removeClass('highlight_stream');
// 		$(".stream2").removeClass('highlight_stream');
// 		$(".stream3").removeClass('highlight_stream');
// 	  	$(".stream3").addClass('highlight_stream');
// 	});

$(".card").on("click", function() {
        /**
         * When we click on an element that has
         * a 'box' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        // create a variable for each item in the array.
        // [0] will always be 'box'
        // [1] will be the box number that was clicked (e.g. 'one', 'two' or 'three')
        var boxClass = classNames[0]; // black
        var className = classNames[1]; // change color
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className).css("background-color", "#fff");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to red.
            $("." + boxClass).css("background-color", "#fff");
            $("." + className).css("background-color", "red");
        }
    });
    
    $("p").on("click", function() {
    $(this).children("a").css("color", "yellow");
    });
	
	// $("p").click(function(){  // When I click on <p> run this code
	// $("p").css("color","red"); //Change the text of all <li>’s to red
 //});
 
 //$("h2").mouseenter(function(){  // When I click on <p> run this code
	// $("h2").css("background-color","green"); //Change the text of all <li>’s to red
 //});
 
 //$("h2").mouseleave(function(){  // When I click on <p> run this code
	// $("h2").css("background-color","white"); //Change the text of all <li>’s to red
 //});
 
 //$("#increase").mouseenter(function(){  // When I click on <p> run this code
	// $("#increase~p").css("font-size","3rem"); //Change the text of all <li>’s to red
 //});
 
 //$("#increase").mouseleave(function(){  
	// $("#increase~p").css("font-size","1rem"); //~ is to reference the sibling relationship between h2 and p
 //});
 
 //$(".bottom_button").mouseenter(function(){  // When I click on <p> run this code
	// $("body").css("background-color","black"); //Change the text of all <li>’s to red
 //});
 
 //$(".bottom_button").mouseleave(function(){  // When I click on <p> run this code
	// $("body").css("background-color","grey"); //Change the text of all <li>’s to red
 //});
 
 //$(".delete").mouseenter(function(){  // When I click on <p> run this code
	// $(".delete img").css("display","none"); //Change the text of all <li>’s to red
 //});
 
 //$(".delete").mouseleave(function(){  // When I click on <p> run this code
	// $(".delete img").css("display","block"); //Change the text of all <li>’s to red
 //});
 
 //$(".delete button").click(function(){  // When I click on <p> run this code
	// $('p').slideToggle(); //Change the text of all <li>’s to red
 //});
 
 //$(".delete button").mouseenter(function(){  // When I click on <p> run this code
	// $(".delete button").fadeTo(1000, 0.5); //Change the text of all <li>’s to red
 //});
 
 //$(".delete button").mouseleave(function(){  // When I click on <p> run this code
	// $(".delete button").fadeTo(1000, 1); //Change the text of all <li>’s to red
 //});
 
//  $("#button1").mouseenter(function(){  // When I click on <p> run this code
// 	$("#button1").removeClass("makeRed").addClass("makeBorder");
//  });
 
//  $("#button1").mouseleave(function(){  // When I click on <p> run this code
// 	$("#button1").removeClass("makeBorder").addClass("makeRed");
//  });
 
//  $("#button1").click(function(){  // When I click on <p> run this code
// 	$('#para1').slideToggle(); //Change the text of all <li>’s to red
//  });
 
//  $("#button2").mouseenter(function(){  // When I click on <p> run this code
// 	$("#button2").removeClass("makeRed").addClass("makeBorder");
//  });
 
//  $("#button2").mouseleave(function(){  // When I click on <p> run this code
// 	$("#button2").removeClass("makeBorder").addClass("makeRed");
//  });
 
//  $("#button2").click(function(){  // When I click on <p> run this code
// 	$('#para2').slideToggle(); //Change the text of all <li>’s to red
//  });
 
 
 
 //$('.delete button').hide();
 
 
 
}); 
