function fadeout(doc) {
	if (doc.style.opacity > 0) {
		doc.style.opacity -= 0.01;
		setTimeout(fadeout,10,doc);
		return
	}
	else {
		return
	}
}

function fadein(secret) {
	if (secret.style.opacity < 1) {
		secret.style.opacity += 0.01;
		console.log(secret.style.opacity);
		setTimeout(fadein,10,secret);
		return
	}
	else {
		return
	}
}

function testButton() {
	alert("Hello!");
	const doc = document.getElementById("fade");
	const secret = document.getElementById("hidden")
	document.getElementById("test").style.color = "blue";
	console.log(secret.style.opacity);
	console.log("hi");
	fadeout(doc);
	secret.style.opacity = 0
	fadein(secret)
}

