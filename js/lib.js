var onloadFunc = new Array();
onloadFunc.push(function(event) {
	document.head.innerHTML += `
		<link rel="apple-touch-icon" sizes="180x180" href="https://entityplantt.github.io/LearnAndShare/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="https://entityplantt.github.io/LearnAndShare/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="https://entityplantt.github.io/LearnAndShare/favicon/favicon-16x16.png">
		<link rel="manifest" href="https://entityplantt.github.io/LearnAndShare/favicon/site.webmanifest">
	`;
});
window.onload = function(event) {
	for (var i = 0; i < onloadFunc.length; i++) {
		onloadFunc[i](event);
	}
}
function setCookie(cname, cvalue, exdays) {
	exdays = exdays ?? 730;
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}