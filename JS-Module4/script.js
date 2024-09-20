alert('Hi Javascript basic, Rate me good')

function upDate(previewPic) {
    console.log('Event triggered!');

    // Log image info
    console.log('Image source:', previewPic.src);
    console.log('Image alt text:', previewPic.alt);

    // Change the text in the div with id 'image'
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt; 
    imageDiv.style.color = 'white'; // added this line to change font color to white

    // Change the background image of the div with id 'image'
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    // Reset background image and text
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.color = '#2e8b57'; // added this line to reset font color
}

function setTabFocus() {
    console.log('onload event triggered. Setting tab index.');

    // Get all images with class 'previewPic'
    const images = document.querySelectorAll('.previewPic');

    // Loop through each image to add tabindex and log information
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`Tab index set for image ${i + 1}:`, images[i].alt);
    }
}
