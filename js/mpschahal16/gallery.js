const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
var Start=0;
var slides = [];
var sl;

var project1 = ['images/portfolio/project1/img1.png','images/portfolio/project1/img2.png',' images/portfolio/project1/img3.png', 'images/portfolio/project1/img4.png', 'images/portfolio/project1/img5.png'];
var project2 = ['images/portfolio/project2/img1.jpg','images/portfolio/project2/img2.jpg',' images/portfolio/project2/img3.jpg', 'images/portfolio/project2/img4.jpg','images/portfolio/project2/img5.jpg'];
var project3 = ['images/portfolio/project3/img1.jpg','images/portfolio/project3/img2.jpg',' images/portfolio/project3/img3.jpg'];
var project4 = ['images/portfolio/project4/img1.jpg','images/portfolio/project4/img2.jpg',' images/portfolio/project4/img3.jpg'];

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}

        

function openModal() {
    modal.classList.remove("hide");
	
    
	var whichProject = this.getAttribute("dataI");
	var dataPname = this.getAttribute("dataPname");
	var dataPdesc = this.getAttribute("dataPdesc");
	if(whichProject){
	} else {
		whichProject = 'project1';
	}
	console.log(whichProject);
	switch(whichProject) {
		case 'project1':
			slides = project1;
		break;
		case 'project2':
			slides = project2;
		break;
		case 'project3':
			slides = project3;
		break;
		case 'project4':
			slides = project4;
		break;
		default:
			slides = project1;
	}
	var pName = document.getElementById('pName');
	pName.innerHTML = dataPname;
	var pDesc = document.getElementById('pDesc');
	pDesc.innerHTML = dataPdesc;
	var img = document.getElementById('img');
	img.innerHTML = "<img src="+slides[Start++]+">";
	sl = setInterval(slider,3000);
}
 
function closeModal(e, clickedOutside) {
	clearInterval(sl);
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}
 
var lis = document.getElementsByClassName('open-modal-btn');

for (var i=0; i<lis.length; i++) {
     lis[i].addEventListener('click', openModal, false);
}
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

