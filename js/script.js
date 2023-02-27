
var images = document.querySelectorAll(".carousel-item");

function slideLeft() {

let currentImage = document.querySelector(".active"); 
let nextIndex = Array.from(images).findIndex(item => item.classList.contains('active')) + 1;
// if not last item 
if (nextIndex < images.length) {
    let nextImage = images[nextIndex];
    imageTransition(currentImage,nextImage)
    }else {
        nextImage = images[0];    
        imageTransition(currentImage,nextImage);
    }
};

function imageTransition(currentImage,nextImage){
    //currentImage.style.transform = "translateX(-100%)";
    //nextImage.style.transform = "translateX(-100%)";
    nextImage.classList.add("active")
    currentImage.classList.remove("active")

    console.log(nextImage)
    console.log(currentImage)
}



// Call the slideLeft function every 5 seconds
setInterval(slideLeft, 1000);