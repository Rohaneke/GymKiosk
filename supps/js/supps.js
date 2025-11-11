let modal = document.getElementById("myModal");
let imgs = document.querySelectorAll(".myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

imgs.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
       
        captionText.innerHTML = this.getAttribute('data-text') || this.alt; 
    }
});


let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
