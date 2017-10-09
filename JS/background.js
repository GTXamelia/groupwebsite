function changeImgHome() {
	var myImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg", "bg9.jpg"];
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	
	document.body.style.backgroundImage = 'url(media/images/essential/background/'+myImages[newImgNumber]+')';
	}
	window.onload=changeImg;
		
		
		
function changeImg() {
	var myImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg", "bg9.jpg"];
	var imgShown = document.body.style.backgroundImage;
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	
	document.body.style.backgroundImage = 'url(../media/images/essential/background/'+myImages[newImgNumber]+')';
	}