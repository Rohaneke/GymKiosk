var modal = document.getElementById("myModal");
var imgs = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgs.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
       
        captionText.innerHTML = this.getAttribute('data-text') || this.alt; 
    }
});

// Sluit de modal wanneer je op de sluitknop klikt
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
