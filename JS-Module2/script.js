alert('Hi Javascript')

function upDate(previewPic) {
    // Step 1: Check if the event is triggering
    console.log('Event triggered!');
    
    // Step 2: Log the source and alt attributes of the hovered image
    console.log('Image source:', previewPic.src);
    console.log('Image alt text:', previewPic.alt);
    
    // Step 3: Use document.getElementById to change the text inside the element with id 'image'
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt; // Change text to alt of hovered image

    // Step 4: Change the background image of the div with id 'image'
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    // Step 5: Reset the background image to default (empty)
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')"; // Reset background image

    // Step 6: Reset the text inside the div with id 'image'
    imageDiv.innerHTML = "Hover over an image below to display here."; // Reset text
}
