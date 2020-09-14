function hamburger(){
    var zoneLiens = document.getElementById('liens');
    if(zoneLiens.style.display === "block"){
        zoneLiens.style.display = 'none';
    } else {
        zoneLiens.style.display = 'block';
    }
}

// carousel 
function switchCarous(){
    switch(currentSlide){
        case 0 :
            slides[0].setAttribute('class', 'imgFluide carCache');
            slides[1].setAttribute('class', 'imgFluide carVisible');
            currentSlide = 1;
            break;
        case 1 :
            slides[1].setAttribute('class', 'imgFluide carCache');
            slides[2].setAttribute('class', 'imgFluide carVisible');
            currentSlide = 2;
            break;
        case 2 :
            slides[2].setAttribute('class', 'imgFluide carCache');
            slides[0].setAttribute('class', 'imgFluide carVisible');
            currentSlide = 0;
            break;
        case 3 :
            currentSlide=0;
            break;
    }
}
var currentSlide = 3;
var slides = document.querySelectorAll('#carousel img');
var interCar = setInterval(switchCarous, 5000);
