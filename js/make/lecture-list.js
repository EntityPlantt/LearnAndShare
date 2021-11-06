onloadFunc.push(function(event) {
	var lectures = document.querySelectorAll("lecture");
	var exercises = document.querySelectorAll("exercise");
	lectures.forEach(function(elm) {
		var lectureNode = document.createElement("div");
		lectureNode.className = "lecture";
		lectureNode.innerText = elm.innerText;
		lectureNode.onclick = function(e) {
			var a = document.createElement("a");
			a.href = this.innerText.toLowerCase().replaceAll(" ", "-").replaceAll("?", "") + ".html";
			a.click();
		}
		document.body.appendChild(lectureNode);
		elm.remove();
	});
	exercises.forEach(function(elm) {
		var exerciseNode = document.createElement("div");
		exerciseNode.className = "exercise";
		exerciseNode.innerText = elm.innerText;
		exerciseNode.onclick = function(e) {
			var a = document.createElement("a");
			a.href = this.innerText.toLowerCase().replaceAll(" ", "-").replaceAll("?", "") + ".html";
			a.click();
		}
		document.body.appendChild(exerciseNode);
		elm.remove();
	});
});