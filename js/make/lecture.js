onloadFunc.push(function(event) {
	var exerciseLink = document.querySelector("link[rel=exercise]");
	if (exerciseLink == null) {
		exerciseLink = `<div id="exercise">There's no exercise for this lecture.</div>`;
	}
	else {
		exerciseLink = `
			<div id="exercise">
				Exercise link: <a href="${exerciseLink.getAttribute("href")}">click here</a>.
			</div>
		`;
	}
	document.body.innerHTML = `
	<div id="article">
		<div id="title" onclick="
			var a = document.createElement('a');
			a.href = '../..';
			a.click();
		">${document.title}</div>
		${document.body.innerHTML}
	</div>
	${exerciseLink}
	<div id="make-longer"></div>
	`;
	exerciseLink = document.querySelector("link[rel=exercise]");
	if (exerciseLink != null) exerciseLink.remove();
	document.title += " - LearnAndShare";
});