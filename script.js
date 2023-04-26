fadeInCount = 0

function start() {
	for (let i=0; i < classFade.length; i++) {
		fadeout(classFade[i],true,createPage)
	}
}

function createPage() {
	fadeInCount += 1
	if (fadeInCount > classHidden.length) {
		console.log("SHOULD NOW BE FADING OUT")
		setTimeout(fadeOutConversation(),1500)
	} else {
		for (let i=0; i < classHidden.length; i++) {
			if (classHidden[i].style.opacity < 1) {
				fadein(classHidden[i],createPage);
				break
			}
		}
	}
}

function fadeOutConversation() {
	console.log("Fading Out Conversation")
	for (let i=0; i < classHidden.length; i++) {
		fadeout(classHidden[i],true,createButtons)
	}
}

function createButtons() {
	toFade = document.getElementById("menu")
	setTimeout(fadein,500,toFade)
}

function fadeout(doc, del=false, callback=undefined) {
	if (doc.style.opacity >= 0) {
		doc.style.opacity = doc.style.opacity - 0.01;
		setTimeout(fadeout,10,doc,del,callback);
	} else {
		console.log("Complete");
		if (del) {
			doc.remove()
			console.log("removed - "+del)
		} else {
			console.log("not removed - "+del)
		}

		if (callback != undefined) {
			callback()
		}
	}
}

function fadein(doc,callback=undefined) {
	if (doc.style.opacity < 1) {
		doc.style.opacity = parseFloat(doc.style.opacity) + 0.01;
		setTimeout(fadein,10,doc,callback);
	} else {
		console.log("Complete");

		if (callback != undefined) {
			setTimeout(callback,1000)
		}
	}
}

