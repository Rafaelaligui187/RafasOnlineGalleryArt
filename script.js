// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and the modal image element
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn"); // Get the left arrow button

// Get all images in the gallery
var images = document.getElementsByClassName("art-image");
var currentIndex = -1; // To track the currently displayed image index

// Loop through the images and add the click event
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        currentIndex = i; // Set currentIndex to the clicked image index
        showModal(this); // Show modal with clicked image
    }
}

// Function to show modal with the selected image
function showModal(image) {
    modal.style.display = "block"; // Show modal
    modalImg.src = image.src; // Set modal image source to clicked image

    // Set caption text: Combine image alt text, creation date, and artist name
    var date = image.getAttribute("data-date");
    captionText.innerHTML = image.alt + (date ? " (Created on: " + date + ")" : "") + "<br>Artist: Rafael Landero Aligui";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks outside the modal image, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Next button functionality
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
    showModal(images[currentIndex]); // Show the next image in the modal
}

// Previous button functionality
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle to the previous image
    showModal(images[currentIndex]); // Show the previous image in the modal
}
