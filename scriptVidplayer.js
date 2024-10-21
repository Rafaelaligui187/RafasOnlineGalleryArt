// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and modal elements
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var modalVideo = null; // Initialize modalVideo element
var currentIndex = -1; // To track the currently displayed image index

// Get all images in the gallery
var images = document.getElementsByClassName("art-image");

// Loop through the images and add the click event
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        currentIndex = i; // Set currentIndex to the clicked image index
        showModal(this); // Show modal with clicked image or video
    }
}

// Function to show modal with the selected image or video
function showModal(image) {
    var videoUrl = image.getAttribute("data-video");

    if (videoUrl) {
        // If there's a video URL, embed YouTube video
        if (!modalVideo) {
            modalVideo = document.createElement("iframe");
            modalVideo.id = "modalVideo";
            modalVideo.width = "100%";
            modalVideo.height = "80%";
            modalVideo.style.display = "block";
            modal.appendChild(modalVideo); // Append iframe if it doesn't exist
        }
        modalVideo.src = videoUrl;
        modalImg.style.display = "none"; // Hide image if video is playing
        modalVideo.style.display = "block"; // Show video

    } else {
        // Otherwise, display the image
        modalImg.src = image.src; // Set modal image source to clicked image
        modalImg.style.display = "block"; // Show image
        if (modalVideo) modalVideo.style.display = "none"; // Hide video if displaying an image
    }

    modal.style.display = "block"; // Show modal
    var date = image.getAttribute("data-date");
    captionText.innerHTML = image.alt + (date ? " (Created on: " + date + ")" : "") + "<br>Artist: Rafael Aligui";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none"; // Hide the modal
    if (modalVideo) modalVideo.src = ""; // Stop video when modal closes
}

// When the user clicks outside the modal image, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        if (modalVideo) modalVideo.src = ""; // Stop video when modal closes
    }
}

// Next button functionality
nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image or video
    showModal(images[currentIndex]); // Show the next item in the modal
}

// Previous button functionality
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle to the previous item
    showModal(images[currentIndex]); // Show the previous item in the modal
}
