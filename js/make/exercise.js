onloadFunc.push(function(event) {
	document.querySelectorAll("exercise").forEach(function(elm) {
		var exercise = document.createElement("div");
		exercise.className = "exercise";
		exercise.innerHTML = `
		<label for="${elm.getAttribute("id")}">${elm.innerHTML}</label>
		<input type="${elm.getAttribute("type")}" id="${elm.getAttribute("id")}" value="${elm.getAttribute("value")}">
		`;
		document.querySelector("div#article").appendChild(exercise);
		elm.remove();
	});
	document.querySelector("div#exercise").remove();
});