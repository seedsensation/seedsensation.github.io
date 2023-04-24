var currentlyfading = false
var count = 0

function fadeout(doc) {
	if (doc.style.opacity >= 0) {
		doc.style.opacity = doc.style.opacity - 0.01;
		setTimeout(fadeout,10,doc);
	} else {
		console.log("Complete");
		currentlyfading = false
	}
	return
}

function fadein(secret) {
	if (secret.style.opacity <= 1) {
		secret.style.opacity = parseFloat(secret.style.opacity) + 0.01;
		setTimeout(fadein,10,secret);
	} else {
		console.log("Complete");
		currentlyfading = false
	}
	return
}

function FadeOutButton() {
	if (currentlyfading == true) {
		ButtonAlert()
	} else {
		const doc = document.getElementById("fade");
		currentlyfading = true
		fadeout(doc);
	}
}

function FadeInButton() {
	if (currentlyfading == true) {
		ButtonAlert()
	} else {
		const doc = document.getElementById("fade");
		currentlyfading = true
		fadein(doc);
	}
}

function ButtonAlert() {
	const doc = document.getElementById("alert");
	doc.style.opacity = 1
	setTimeout(fadeout,1000,doc);
}

function CountButton() {
	count += 1
	if (count == 1) {
		s = ""
	} else {
		s = "s"
	}
	var string = `You have clicked the button ${count} time${s}.`
	document.getElementById("buttoncount").innerHTML = string
	doc = document.getElementById("count")
	doc.style.opacity = 1
	setTimeout(fadeout,1000,doc);
}

	
	
