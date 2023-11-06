var video = document.querySelector('.video');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.volume = this.document.querySelector('#slider').value / 100;
	video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("gheilhas");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate * 100 + "%");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .1;
	console.log(video.playbackRate * 100 + "%");
});


document.querySelector("#skip").addEventListener("click", function() {
	
	video.currentTime += 10;
	if (video.currentTime > 67.4) {
		video.currentTime = 0;
	}
	//video.load();

	console.log(video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function() {
	var currVol = document.querySelector("#slider").value;
	video.volume = currVol;
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	video.load();
	console.log("gheilhas");
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	}else {
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	document.querySelector("#volume").textContent = 0 + "%";
	//console.log("gheilhas");
});