counter = 0

function start() {
	for (let i=0; i < classFade.length; i++) {
		fadeout(classFade[i],true,createPage)
	}
}

function createPage() {
	counter += 1
	for (let i=0; i < classHidden.length; i++) {
		if (classHidden[i].style.opacity < 1) {
			fadein(classHidden[i],createPage);
			break
		}
	}
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
		console.log(doc.style.opacity)
		doc.style.opacity = parseFloat(doc.style.opacity) + 0.01;
		setTimeout(fadein,10,doc,callback);
	} else {
		console.log("Complete");

		if (callback != undefined) {
			setTimeout(callback,1000)
		}
	}
}

