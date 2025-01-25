const vedioBtn=document.querySelector("#VideoBtn");
const videoInput=document.querySelector("#videoInput");
const videoPlayer=document.querySelector("#main");

const handleInput=()=>{
	videoInput.click();
};
 const acceptInputHandler= (Event)=>{
	let selectedVideo;
	selectedVideo=Event.target.files[0];
	const link = URL.createObjectURL(selectedVideo);
	const videoElement=document.createElement("video");
	videoElement.src=link;
	videoElement.setAttribute("class", "video");
	videoPlayer.appendChild(videoElement);
	video=videoElement;
	videoElement.play();
	isPlaying=true;
	videoElement.volume = 0.3;
 }

videoBtn.addEventListener("click", handleInput);
videoInput.addEventListener("change", acceptInputHandler);


 const speedUp = document.querySelector("#speedUp");
 const speedDown =document.querySelector("#speedDown");
 const volumeUp = document.querySelector("#volumeUp");
 const volumeDown = document.querySelector("#volumeDown");
 const toast = document.querySelector(".toast");


 const speedUpHandler= () =>{
const videoElement = document.querySelector("video");
if (videoElement == null) {
	return;
	
}
if (videoElement.playbackRate > 3) {
	return;
}
const increaseSpeed = videoElement.playbackRate + 0.5;
videoElement.playbackRate = increaseSpeed ;
 console.log( "increased speed",increaseSpeed);
 }

 const speedDownhandler = () =>{
	const videoElement = document.querySelector("video");
	if (videoElement == null) {
		return;
		
	}
	if (videoElement > 0) {	
		const decreasedSpeed =videoElement.playbackRate - 0.5;
		videoElement.playbackRate = decreasedSpeed ;
		console.log(decreasedSpeed);
	}
 }

 const volumeUpHandler = () =>{
	const videoElement = document.querySelector("video");
	
	if (videoElement == null) {
		return;
	}
	if (videoElement >= 0.99) {  
		return;
	}

	const increasedVolume = videoElement.volume + 0.1 ;
	videoElement.volume = increasedVolume;
}
 const volumeDownHandler = () => {
	const videoElement = document.querySelector("video")
	if (videoElement == null) {
		return;
	}
	if (videoElement.volume <= 0.1) {
		videoElement.volume == 0 ;
		return
	}

	const decreasedVolume = videoElement.volume - 0.1;
	videoElement.volume = decreasedVolume;
	
}

speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click", speedDownhandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);

/**********controls************/
const fullScreenElem = document.querySelector("#fullScreen");
const handleFullScreen = () =>{
	videoPlayer.requestFullscreen();
}
fullScreenElem.addEventListener("click", handleFullScreen);

//adding seek behavior in slider
slider.addEventListener("change",function(e){
	let value = e.target.value;
	video.currentTime = value;
	// console.log(value)
})

/******forward and backword button*******/ 
const forwardBtn = document.querySelector("#forwardBtn");
const backwardBtn = document.querySelector("#backBtn");
function forward() {
	currentPlayTime = math.round(video.currentTime)+5;
	video.currentTime = currentPlayTime;
	slider.setAttribute("value",currentPlayTime);
	let time= timeFormat(currentPlayTime);
	currentPlayTime.innerText =time;  
}

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);