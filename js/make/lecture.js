onloadFunc.push(function(event) {
	var exerciseLink = document.querySelector("link[rel=exercise]"),
		previousLecture = document.querySelector("link[rel=prev-lec]"),
		nextLecture = document.querySelector("link[rel=next-lec]");
	if (exerciseLink == null) {exerciseLink = `<div id="exercise">There's no exercise for this lecture.</div>`;}
	else {exerciseLink = `<div id="exercise">Exercise link: <a href="${exerciseLink.getAttribute("href")}">click here</a>.</div>`;}
	if (previousLecture == null) {previousLecture = ``;}
	else {previousLecture = `<div id="prev-lecture"><a class="hidden" href="${previousLecture.getAttribute("href")}">Previous</a></div>`;}
	if (nextLecture == null) {nextLecture = ``;}
	else {nextLecture = `<div id="next-lecture"><a class="hidden" href="${nextLecture.getAttribute("href")}">Next</a></div>`;}
	document.body.innerHTML = `
	<div id="article">
		<div id="title" onclick="
			var a = document.createElement('a');
			a.href = '../..';
			a.click();
		">${document.title}</div>
		${document.body.innerHTML}
	</div>
	<div id="make-longer"></div>
	${exerciseLink}
	${previousLecture}
	${nextLecture}
	`;
	document.title += " - LearnAndShare";
	document.querySelectorAll("code").forEach(function(elm) {
		hljs.highlightElement(elm);
	});
	hljs.highlightAll();
});