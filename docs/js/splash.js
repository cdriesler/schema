//Project splash id glossary:
// 00 - maison_splash
// 01 - eponym_splash
// 02 - natalus_splash
// 03 - motive_text
// 04 - motive_text (-> napkin_manifesto)
// 05 - napkin_manifesto
// 06 - detail-bar

var splash_ids = ["maison_splash", "eponym_splash", "natalus_splash", "motive_text", "motive_text", "napkin_manifesto", "detail-bar"];

var C  = 0; //opacity increase continuation token
var C2 = 0; //opacity increase running token

function splashFadeIn(index) {
	"use strict";
	
	var vid = document.getElementById(splash_ids[parseInt(index)]);
	vid.style.display = "inherit";
	
	var opacity = vid.style.opacity;
	
	if (!opacity) {
		opacity = 0;
	}
	
	//alert(opacity);
	
	if (opacity < 1 && C < 1) {
		C2 = 1;
		opacity = parseFloat(opacity) + parseFloat(0.05);
		//alert("increasing opacity... | " + opacity);
		setTimeout(function(){splashFadeIn(index);},100);
	}
	else if (opacity >= 1) {
		C2 = 0;
		
		if (index === 5) {
			splashFadeOut(4);
		}
	}
	else if (C === 1 && C2 === 1) {
		//end loop if fadeOut triggered
		C = 0;
		C2 = 0;
	}
	else if (C === 1 && C2 === 0) {
		C = 0;
		setTimeout(function(){splashFadeIn(index);},5);
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
		setTimeout(function(){splashFadeOut(index);},5);
	}
	else {
		C = 1;
		vid.style.display = "none";
	}
	
	vid.style.opacity = opacity;
}