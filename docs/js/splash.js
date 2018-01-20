//Project splash id glossary:
// 00 - maison_splash
// 01 - eponym_splash
// 02 - natalus_splash
// 03 - motive_text
// 04 - motive_text (-> napkin_manifesto)
// 05 - napkin_manifesto
// 06 - detail-bar
// 07 - author_text
// 08 - eponym_content_1 (-> eponym_content_2)
// 09 - eponym_content_2 (-> eponym_content_3)
// 10 - eponym_content_3 

var splash_ids = ["maison_splash", "eponym_splash", "natalus_splash", "motive_text", "motive_text", "napkin_manifesto", "detail-bar", "author_text", "eponym_content_1", "eponym_content_2", "eponym_content_3",];

var C  = 0; //opacity increase continuation token
var C2 = 0; //opacity increase running token

function splashFadeIn(index, navIndex) {
	"use strict";
	
	var vid = document.getElementById(splash_ids[parseInt(index)]);
	vid.style.display = "inherit";
	
	var opacity = vid.style.opacity;
	
	if (!opacity) {
		opacity = 0;
	}
	
	var tickrate = 100;
	
	//alert(opacity);
	
	if (opacity < 1 && C < 1) {
		C2 = 1;
		opacity = parseFloat(opacity) + parseFloat(0.05);
		//alert("increasing opacity... | " + opacity);
		setTimeout(function(){splashFadeIn(index, navIndex);},tickrate);
	}
	else if (opacity >= 1) {
		C2 = 0;
		
		if (index === 5) {
			splashFadeOut(4);
		}
		else if (index === 6) {
			updateNav(navIndex);
		}
	}
	else if (C === 1 && C2 === 1) {
		//end loop if fadeOut triggered
		C = 0;
		C2 = 0;
	}
	else if (C === 1 && C2 === 0) {
		C = 0;
		setTimeout(function(){splashFadeIn(index, navIndex);},5);
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
		
		if (index === 8) {
			splashFadeOut(9);
		}
		else if (index === 9) {
			splashFadeOut(10);
		}
	}
	
	vid.style.opacity = opacity;
}