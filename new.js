let images = [
    'images4/Screenshot 2025-01-28 135720.png',
    'images4/Screenshot 2025-01-28 135731.png',
    'images4/Screenshot 2025-01-28 135751.png',
    'images4/Screenshot 2025-01-28 135816.png',
];

let currentIndex = 0;

function showImage(index) {
    imgElement = document.getElementById('imageDisplay');
    imgElement.src = images[index];
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


showImage(currentIndex);