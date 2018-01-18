var blocker_1 = 0; //title blocker
var blocker_2 = 0; //subtitle blocker

function updateNav (projectIndex) {
	"use strict";
	
	showDetailContent(projectIndex);
	updateActions(projectIndex);
}


function updateDetailContent(index, newTitle, oldTitle) {
	"use strict";
	var currentTitle = oldTitle;
	//alert(newTitle[index]);
	var nextTitle = setCharAt(currentTitle,index,newTitle.substr(index, 1));
	
	document.getElementById("detail-bar").textContent = nextTitle;
	
	index++;
	blocker_1 = 1;
    if(index < newTitle.length ){
        setTimeout(function(){ updateInfo(index, newTitle, nextTitle); }, 80);
    }
	else {
		blocker_1 = 0;
	}
}

function showDetailContent(index) {
	"use strict";
	
	var creditsInfo = [
		"R007 : pratt institute / dragana zoric, critic",
		"R003 : school for poetic computation, 2017 summer session",
		"R008 : independent, w / adaptations on Doodlebug, by andrew heumann"
	];
	
	var existingText = document.getElementById("detail-bar").textContent;
	var oldTitle = existingText;
	var newTitle = creditsInfo[index];
	
	if (blocker_2 === 1) {
		setTimeout(showDetailContent(index), 400);
	}
	else {
		updateDetailContent(0, newTitle, oldTitle, 1);	
	}
	
}


function updateInfo(index, newTitle, oldTitle, state) {
	"use strict";
	var currentTitle = oldTitle;
	//alert(newTitle[index]);
	var nextTitle = setCharAt(currentTitle,index,newTitle.substr(index, 1));
	
	document.getElementById("detail-bar").innerHTML = nextTitle;
	
	index++;
	blocker_2 = 1;
    if(index < newTitle.length ){
        setTimeout(function(){ updateInfo(index, newTitle, nextTitle, state); }, 25);
    }
	else {
		blocker_2 = 0;
		document.getElementById("detail-bar").textContent = newTitle;
	}
}

function setCharAt(currentTitle,index,chr) {
	"use strict";
	//alert(currentTitle.substr(0,index) + chr + currentTitle.substr(index+1));
    return currentTitle.substr(0,index) + chr + currentTitle.substr(index+1);
}

function updateActions(index) {
	"use strict";

	//alert("updating nav");
	
	document.getElementById("left-action").innerHTML = "<a class='nav-link' onClick='resetNavActions();' style='cursor: pointer;' data-activeProj='" + index.toString() + "'>< cancel</a>";	
}

function resetNavActions() {
	"use strict";

	//alert("updating nav");
	
	document.getElementById("left-action").innerHTML = '<a class="nav-link" style="cursor: pointer;">[ author ]</a>';
	
	alert(document.getElementById("left-action").activeProj);
	
	splashFadeOut(6);
	hideAuthorOverlay();
}