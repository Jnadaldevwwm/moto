function hamburger(e){
    e.preventDefault();
    var zoneLiens = document.getElementById('liens');
    if(zoneLiens.style.display === "block"){
        zoneLiens.style.display = 'none';
    } else {
        zoneLiens.style.display = 'block';
    }
}