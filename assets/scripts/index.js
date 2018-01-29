$(document).ready(function(){
	$("#about-page, #three-page, #contact-page").hide();
  $('#feed_data').hide();
});

$(window).on("load",function() {
 $(window).scroll(function() {
   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
   $(".fade-animation").each(function() {

     var objectBottom = $(this).offset().top + $(this).outerHeight();

     if (objectBottom < windowBottom) { 
       if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
     } else { 
       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
     }
   });
 }).scroll(); 
});

function navigation(blockname)
{
	$("#home-page, #about-page, #three-page, #contact-page").hide();

	if(blockname == 'navHome') {
		$("#home-page").show();
	}
	else {
		if(blockname == 'navThree') {
			$("#three-page").show();
		}
		else {
			if(blockname == 'navAbout') {
				$("#about-page").show();
			}
			else {
				if(blockname == 'navContact') {
					$("#contact-page").show();
				}
			}
		}
	} 
		if(blockname == 'navThree'){

		}
		else if(blockname=='navAbout'){

	}
	else if(blockname=='navContact'){

	}

	$("#navHome").removeClass("active");
  $("#navThree").removeClass("active");
	$("#navAbout").removeClass("active");
	$("#navContact").removeClass("active");
	$("#"+blockname+"").addClass("active");
}

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
