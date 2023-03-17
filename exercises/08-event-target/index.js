window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function (event) {
		var x = event.target.tagName
		alert(x);
	});
};