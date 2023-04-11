let images = document.querySelectorAll(".carousel-item");
let p = images.length;
let i = 0;


function slideLeft() {
    // first item
    if (i === 0) {
        images[i].style = "left:0;z-index:3"; // move current image 
        images[i + 1].style = "left:100%;z-index:1";
        images[p - 1].style = "left:-100%;z-index:1"; // last      
        i++
    // not first not last    
    } else if (i > 0 && i < p - 1) {
        images[i - 1].style = "left:-100%;z-index:1";
        images[i].style = "left:0;z-index:3";
        images[i + 1].style = "left:100%;z-index:1";
        i++;
    // second last item     
    } else if (i === p - 1) {
        images[i - 1].style = "left:-100%;z-index:1";
        images[i].style = "left:0;z-index:3";
        i = 0;
        images[i].style = "left:100%;z-index:1";
  }
}

// Call the slideLeft function every 5 seconds
//setInterval(slideLeft, 5000);

