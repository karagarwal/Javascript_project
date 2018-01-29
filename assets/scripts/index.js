$(document).ready(function(){
	$(" #about-nav, #three-nav, #contact-nav, .contact-img, #google").hide();
  $('#feed_data').hide();

  $("#navHome").click(function(){
    $(" #about-nav, #three-nav, #contact-nav, .contact-img, #google").hide();
	  $(".slideshow-container, #slider-dots, #home-nav").show();
	  $("#navThree").removeClass("active");
  	$("#navAbout").removeClass("active");
 		$("#navContact").removeClass("active");
  	$("#navHome").addClass("active");
  });

  $("#navThree").click(function(){
    $(".slideshow-container, #slider-dots, #home-nav, #about-nav, #contact-nav, .contact-img, #google").hide();
	  $("#three-nav").show();
	  $("#navThree").addClass("active");
  	$("#navAbout").removeClass("active");
 		$("#navContact").removeClass("active");
  	$("#navHome").removeClass("active");
  });

  $("#navAbout").click(function(){
	  $(".slideshow-container, #slider-dots, #home-nav, #three-nav, #contact-nav, .contact-img, #google").hide();
	  $("#about-nav").show();
	  $("#navThree").removeClass("active");
  	$("#navAbout").addClass("active");
 		$("#navContact").removeClass("active");
  	$("#navHome").removeClass("active");
  });

  $("#navContact").click(function(){
	  $(".slideshow-container, #slider-dots, #home-nav, #about-nav, #three-nav").hide();
	  $("#contact-nav, .contact-img, #google").show();
	  $("#navThree").removeClass("active");
  	$("#navAbout").removeClass("active");
 		$("#navContact").addClass("active");
  	$("#navHome").removeClass("active");
 });
});

function showSlides() 
{
	var i;
	var slides =  document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex> slides.length) 
	{
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++)
  {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 2000);
}

 var image_tracker = 0;

function bulb1(){
	var image = document.getElementById('bulb_state');
	if(image_tracker == 0)
	{
		image.src="assets/images/bulb_on.png";	
		image_tracker = 1;
		document.getElementById('light_button').innerHTML = "Turn Lights Off";
	}
	else
	{
		image.src="assets/images/bulb_off.png";	
		image_tracker = 0;
		document.getElementById('light_button').innerHTML = "Turn Lights On";
	}
}

function check_empty()
{
	if (document.getElementById('feed_name').value == "" || document.getElementById('feed_email').value == "" || document.getElementById('feed').value == "" )
	{
		alert("Please Fill All Fields !");
	} 
	else 
	{
		document.getElementById('form');
		var row = "Feedback Submitted. Thank you " + form.feed_name.value + " and email id as " + form.feed_email.value;
		  $('#feed_data').show();
		  $('#feed_data').append(row + '<br>');
      $('#feedback').css('display', 'none');
			alert("Feedback Submitted Successfully...");
	}
}

function div_show() 
{
	document.getElementById('feedback').style.display = "block";
}

function div_hide()
{
	document.getElementById('feedback').style.display = "none";
}
