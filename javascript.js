// NAVIGATION ________________________________

$(document).ready(function(){


	$( ".cross" ).hide();
	$( ".menu" ).hide();
	$( ".hamburger" ).click(function(event) {
		event.preventDefault();
	$( ".menu" ).slideToggle( "normal", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	});
	});

	$( ".cross" ).click(function(event) {
		event.preventDefault();
	$( ".menu" ).slideToggle( "normal", function() {
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
	});
	});

});


// PROFILE INFO ________________________________


var profileImgClick;
var profileInfo;
var activeTab;
var ProfileSlider;

var photoElems = document.querySelector(".ProfileSlider").children; // select your profile images

for (var i = 0; i < photoElems.length; i++) { // loop through them

	photoElem = photoElems[i];

	photoElem.addEventListener("click", profileClick);

}

function profileClick(e) {

	var currentlySelectedPic = document.querySelector(".photo-active");
	if(currentlySelectedPic !== null) {

		currentlySelectedPic.classList.remove("photo-active");
	}

	var currentlySelectedProfile = document.querySelector(".profile_slide.active");
	if (currentlySelectedProfile !== null) {

		currentlySelectedProfile.classList.remove("active");
	}

	var profilePic = e.currentTarget; 
	var indProfileId = profilePic.getAttribute("data-profile-id");
	var targetProfile = document.querySelector('.profile_slide[data-profile-id="' + indProfileId + '"]');
	targetProfile.classList.add("active");

	var photoElem = e.currentTarget;
  	photoElem.classList.add('photo-active');

}

// ----------------------------------------------------------------------------

//  STICKY HEADER

// ----------------------------------------------------------------------------


	var ads_box_1_logic_box = document.querySelector(".fixed-ads-logic-box");
	var ads_box_1 = document.querySelector(".fixed-ads");
    var position1 = getComputedStyle(ads_box_1, "position").getPropertyValue("position");
    var top1 = getComputedStyle(ads_box_1, "top").getPropertyValue("top");
    var display1 = getComputedStyle(ads_box_1, "display").getPropertyValue("display");
    var width1 = getComputedStyle(ads_box_1, "width").getPropertyValue("width");

    /* The above variables grab the exact properties of the navigation bar.
    It tells us where the position is, it's width, and it's display properties AND saves
    that information into the variables so that we can use that info later*/
    
    window.addEventListener("scroll", function(){
    	
	        if(ads_box_1_logic_box.offsetTop <= window.pageYOffset)
	        {
	            ads_box_1.style.position = "fixed";
	            ads_box_1.style.top = "0px";
	            
	        }
	        else
	        {
	            ads_box_1.style.position = position1;
	            ads_box_1.style.top = top1;
	            ads_box_1.style.display = display1;
	            ads_box_1.style.width = width1;
	        }
	   
	     
    }, false); // like prevent default

     /* The if statement sets the nav bar to fixed and 0 top ONLY when it hits the window
     pageYOffest. The else (which is when it hasn't hit this offset) places the nave back
     to where it was according to the original properties saved in the variables */

// ----------------------------------------------------------------------------

//  MODALS

// ----------------------------------------------------------------------------


// THE TRIGGERS ___________

var modalTriggers = document.querySelectorAll(".modalTrigger");
// alert(modalTriggers.length); // alert check says there are four! Sweet!!

for (var i = 0; i < modalTriggers.length; i++) {

	var modalTrigger = modalTriggers[i];
	modalTrigger.onclick = function(e) {

		e.preventDefault();

		// alert("a"); // check the click event is working! YES!!

		var modalTrigger = e.currentTarget;

		var targetId = modalTrigger.getAttribute("data-modal-target");

		// alert(targetId);

		var modalElem = document.getElementById(targetId);
		modalElem.classList.add("md-show");
	}
}

// THE CLOSE BUTTONS ___________

var modalClose = document.querySelectorAll(".modal-close");

for (var i = 0; i < modalClose.length; i++) {

	var modalCloseBtn = modalClose[i];
	modalCloseBtn.onclick = function (e) {

	var modalCloseBtn = e.currentTarget.closest(".modal-container");

	modalCloseBtn.classList.remove("md-show");

	e.preventDefault();	


	}
}

// NAV SCROLL TO POSITION __________________

var scrollY = 0; // currnt Y scroll position
var distance = 40; // number of pixels page will scroll per 24 milliseconds
var speed = 24; // scroll speed

var anchorLinks;

var currentTarget; 

anchorLinks = document.querySelectorAll('nav ul li a');

for (var i = 0; i < anchorLinks.length; i++) {
 	
 	var anchorLink = anchorLinks[i];

 	anchorLink.addEventListener('click', function(e) { 

 		e.preventDefault();

 		var currentLink = e.target;
 		var targetID = currentLink.getAttribute('data-target');

 		currentTarget = document.getElementById(targetID);

 		animate();

 	});

 } 

 function resetScroll(){

				var currentY = window.pageYOffset; //current page scroll position

				var targetY = 0; //where I want the page to scroll to

				var animator = window.setTimeout(resetScroll, speed);

				if(currentY > targetY){

					scrollY = currentY - distance;
					window.scrollTo(0, scrollY);
				}
	else{
		window.clearTimeout(animator);
	}
}

 function animate() {

 	var currentY = window.pageYOffset; // grabs current scroll position of the page
 	var targetY = currentTarget.offsetTop; // grabs target's top position
 	var bodyHeight = document.body.offsetHeight; // grabs the total height of the page content
 	var yPos = currentY + window.innerHeight; // end of the visible screen (bottom of the screen)

 	var animator = window.setTimeout(animate, 24);

 	if (yPos > bodyHeight) { // if the current scroll position is still greater than the page height
 		 
 		// then stop the animation					
 		window.clearTimeout(animator);
 	}
 	// and if not
 	else {
 		// if the current scroll position has not reached its target yet
 		if (currentY < targetY - distance) {

 			// the increase the current scroll position
 			scrollY = currentY + distance;
 			// and scroll to that new position
 			window.scrollTo(0, scrollY);
 		}
 		// if the current scroll position has reached it's target
 		else {
 			// stop the animation
 			window.clearTimeout(animator);
 		}
 	}

 }























