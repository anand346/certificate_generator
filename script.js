const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

var myFont = new FontFace('myFont', 'url(./desyrel/DESYREL_.ttf)');
myFont.load().then((font) => {
	document.fonts.add(font);
})


const image = new Image()
image.src = 'certificate_template.jpg'
image.onload = function () {
	drawImage()
}



function drawImage() {
	
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '280px myFont'
	ctx.textAlign = "center"
	ctx.fillStyle = '#00ae4d'
	ctx.fillText(nameInput.value, 1820, 1380)

	ctx.font = '50px Fira Code'
	ctx.fillStyle = '#000'
	ctx.fillText(getTodayDate(), 900, 1850)
	canvas.style.display = "none";
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'BePracitcal - ' + nameInput.value
})


function getTodayDate(){
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var month = today.toLocaleString('default', { month: 'long' });
	var yyyy = today.getFullYear();

	today =  dd + ' ' + month + ' ' + yyyy;
	return today;
}

