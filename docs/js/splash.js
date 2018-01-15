//Project splash id glossary:
// 00 - maison_splash
// 01 - eponym_splash
// 02 - natalus_splash
// 03 - motive_text
// 04 - motive_text (-> napkin_manifesto)
// 05 - napkin_manifesto

var splash_ids = ["maison_splash", "eponym_splash", "natalus_splash", "motive_text", "motive_text", "napkin_manifesto"];

var C = 0; //opacity increase continuation token

function splashFadeIn(index) {
	"use strict";
	
	var vid = document.getElementById(splash_ids[parseInt(index)]);
	vid.style.display = "inherit";
	
	var opacity = vid.style.opacity;
	
	if (!opacity) {
		opacity = 0;
	}
	
	//alert(opacity);
	
	if (opacity < 1 && C !== 1) {
		opacity = parseFloat(opacity) + parseFloat(0.05);
		//alert("increasing opacity... | " + opacity);
		setTimeout(function(){splashFadeIn(index);},100);
	}
	
	vid.style.opacity = opacity;
	
}

function splashFadeOut(index) {
	"use strict";
	
	var vid = document.getElementById(splash_ids[parseInt(index)]);
	
	var opacity = vid.style.opacity;
	
	if (!opacity) {
		opacity = 0;
	}
	
	//alert(opacity);
	
	if (opacity > 0) {
		C = 1;
		opacity = parseFloat(opacity) - parseFloat(0.05);
		//alert("increasing opacity... | " + opacity);
		setTimeout(function(){splashFadeOut(index);},25);
	}
	else {
		C = 0;
		vid.style.display = "none";
		
		if (index === 4) {
			splashFadeIn(5);
		}
	}
	
	vid.style.opacity = opacity;
}