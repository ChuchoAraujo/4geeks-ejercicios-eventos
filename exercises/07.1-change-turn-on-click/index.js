var currentUser = "Mario";
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#screen").innerHTML = "It's " + currentUser + "'s turn";
	document.querySelector("#button").addEventListener("click", turnChanger);
});
function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} else if (currentUser == "Juan") {
		currentUser = "Josh";
	} else {
		currentUser = "Mario";
	}
	document.querySelector("#screen").innerHTML = "It's " + currentUser + "'s turn";
}