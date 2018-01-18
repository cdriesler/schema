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
		"R004 : school for poetic computation, code narratives summer session",
		"R008 : inspired by + adaptations on andrew heumann's plugin doodlebug",
		"R003 : napkin manifesto / last updated 2018-12-17"
	];
	
	var existingText = document.getElementById("detail-bar").textContent;
	var oldTitle = existingText;
	var newTitle = creditsInfo[index];
	

	updateDetailContent(0, newTitle, oldTitle, 1);	
	
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
	
	var projPages = [
		"maison",
		"eponym",
		"natalus"		
	];
	
	if (index === 3) {
		//do nothing, napkin manifesto is open.
	}
	else {
		document.getElementById("left-action").innerHTML = "<a class='nav-link' onClick='resetNavActions();' style='cursor: pointer;'>< cancel</a>";	
		document.getElementById("left-action").setAttribute("data-activeProj", index);	
		
		document.getElementById("right-action").innerHTML = "<a class='nav-link' href='docs/html/" + projPages[index] + ".html' style='cursor: pointer;'>create ></a>";	
	}
}

function resetNavActions() {
	"use strict";

	//alert("updating nav");
	
	document.getElementById("left-action").innerHTML = '<a class="nav-link" style="cursor: pointer;">[ author ]</a>';
	
	var activeProj = parseInt(document.getElementById("left-action").getAttribute("data-activeProj"));
	
	document.getElementById("detail-bar").textContent = "";
	
	splashFadeOut(activeProj);
	splashFadeOut(6);
	hideAuthorOverlay();
}