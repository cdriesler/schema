/* jshint esversion: 6 */

var blocker_1 = 0; //title blocker
var blocker_2 = 0; //subtitle blocker

function makeAuthorOverlay(newTitle, index) {
	"use strict";
	
	showAuthor(newTitle);
	showAuthorSub(index);
}

function hideAuthorOverlay() {
	"use strict";
	
	hideAuthor();
	hideAuthorSub();
}

function showAuthor(newTitle) {
	"use strict";
	
	var oldTitle = document.getElementById("feature-title").textContent.substr(0, 11);
	
	if (blocker_1 === 1) {
		setTimeout(showAuthor, 400);
	}
	else {
		updateTitle(0, newTitle, oldTitle);	
	}
	
}

function hideAuthor() {
	"use strict";
	
	var oldTitle = document.getElementById("feature-title").textContent.substr(0, 11);
	var newTitle = "S Y S T E M";
	
	updateTitle(0, newTitle, oldTitle);	
	
}

function updateTitle(index, newTitle, oldTitle) {
	"use strict";
	var currentTitle = oldTitle;
	//alert(newTitle[index]);
	var nextTitle = setCharAt(currentTitle,index,newTitle.substr(index, 1));
	
	document.getElementById("feature-title").innerHTML = nextTitle;
	
	index++;
	blocker_1 = 1;
    if(index < newTitle.length ){
        setTimeout(function(){ updateTitle(index, newTitle, nextTitle); }, 80);
    }
	else {
		blocker_1 = 0;
	}
}

function showAuthorSub(index) {
	"use strict";
	
	var subtitles = [
		"home & campground : retrofit living + landscape generator",
		"double-monument : homage to assorted character conflicts",
		"synchronzed workflow between rhino and illustrator"
	];
	
	var existingText = document.getElementById("feature-subtitle").textContent;
	var oldTitle = existingText;
	var newTitle = subtitles[index];
	
	if (blocker_2 === 1) {
		setTimeout(function(){ showAuthorSub(index); }, 400);
	}
	else {
		updateSubTitle(0, newTitle, oldTitle, 1);	
	}
	
}

function hideAuthorSub() {
	"use strict";
	
	var existingText = document.getElementById("feature-subtitle").textContent;
	var oldTitle = existingText;
	var newTitle = "[ free software ] experiments re : automation and architecture";
	
	if (blocker_2 === 1) {
		setTimeout(hideAuthorSub, 400);
	}
	else {
		updateSubTitle(0, newTitle, oldTitle, 0);	
	}
	
}

function updateSubTitle(index, newTitle, oldTitle, state) {
	"use strict";
	var currentTitle = oldTitle;
	//alert(newTitle[index]);
	var nextTitle = setCharAt(currentTitle,index,newTitle.substr(index, 1));
	
	document.getElementById("feature-subtitle").innerHTML = nextTitle;
	
	index++;
	blocker_2 = 1;
    if(index < newTitle.length ){
        setTimeout(function(){ updateSubTitle(index, newTitle, nextTitle, state); }, 25);
    }
	else {
		blocker_2 = 0;
		//alert(state);
		if (state === 0) {
			document.getElementById("feature-subtitle").innerHTML = '<a class="nav-link" href="https://www.gnu.org/philosophy/open-source-misses-the-point.en.html#content" target="_blank" style="color:grey">[ free software ]</a> experiments re : automation and architecture';
		}
		else {
			document.getElementById("feature-subtitle").textContent = newTitle;
		}
	}
}

function setCharAt(currentTitle,index,chr) {
	"use strict";
	//alert(currentTitle.substr(0,index) + chr + currentTitle.substr(index+1));
    return currentTitle.substr(0,index) + chr + currentTitle.substr(index+1);
}

function toggleMotiveVis(state) {
	"use strict";
	
	var button = document.getElementById("motive-button");
	
	if (state === 0) {
		button.style.opacity = 0;
	}
	else if (state === 1) {
		button.style.opacity = 1;
	}
}