onloadFunc.push(function(event) {
	for (var i = 0; i < document.querySelectorAll("body ul#topics li").length; i++) {
		var x = document.querySelectorAll("body ul#topics li")[i];
		x.innerHTML = `
			<a class='hidden' href='lectures/${x.innerHTML.toLowerCase().replaceAll(" ", "-")}'>
				${x.innerHTML}
			</a>
		`;
	}
});